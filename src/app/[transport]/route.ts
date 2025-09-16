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
        return
      }

      
    },
  )
})