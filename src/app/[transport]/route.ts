import { verifyClerkToken } from '@clerk/mcp-tools/next'
import { createMcpHandler, experimental_withMcpAuth as withMcpAuth } from '@vercel/mcp-adapter'
import { auth, clerkClient } from '@clerk/nextjs/server'

const clerk = await clerkClient()

const handler = createMcpHandler((server) => {
  server.tool(
    'get-clerk-user-data',
    'Gets data about the Clerk user that authorized this request',
    {},
    async (_, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string
      const userData = await clerk.users.getUser(userId)

      return {
        content: [{ type: 'text', text: JSON.stringify(userData) }],
      }
    },
  )
})