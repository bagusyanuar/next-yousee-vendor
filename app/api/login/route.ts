import { cookies } from 'next/headers'
import { getIronSession, SessionData } from 'iron-session'
import { JSONSuccessResponse } from '@/lib/jsonResponse'
import { sessionOptions } from '@/lib/session'

export async function POST(request: Request) {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)
    const body = await request.json()
    session.user = { username: body['username'] }
    session.token = 'token'
    await session.save()
    return JSONSuccessResponse(body)
}