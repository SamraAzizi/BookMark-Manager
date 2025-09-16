import { verifyClerkToken } from '@clerk/mcp-tools/next'
import { createMcpHandler, experimental_withMcpAuth as withMcpAuth } from '@vercel/mcp-adapter'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { getUserBookmarks, createUserBookmark } from '@/lib/bookmark-utils'
import { CreateBookmarkData } from '@/types/bookmark'
import { z } from "zod"


const clerk = await clerkClient()

const handler = createMcpHandler((server) => {
  server.tool(
    'get-user-bookmarks',
    'Gets all bookmarks for the authenticated users',
    {},
    async (_, { authInfo }) => {
      try{

        const userId = authInfo!.extra!.userId! as string
        const bookmarks = await getUserBookmarks(userId)
        return {
          content: [{type: "text", text: JSON.stringify(bookmarks)}]
        }
      
      }catch(error){
        return{
          content: [{type: "text", text: `error: ${error}`}]
        }
      }

      
    },
  ),
  server.tool("create-bookmark", "Create a new bookamrk for and authenticated user",{
    url: z.string().describe("The URL of the bookmark to create"),
    title: z.string().describe("The title of the bookmark"),
    
  })
})

const authHandler = withMcpAuth(
  handler,
  async (_, token) => {
    const clerkAuth = await auth({ acceptsToken: 'oauth_token' })
    return verifyClerkToken(clerkAuth, token)
  },
  {
    required: true,
    resourceMetadataPath: '/.well-known/oauth-protected-resource/mcp',
  },
)

export { authHandler as GET, authHandler as POST }