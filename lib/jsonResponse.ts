
export type APIResponse = {
    code: number
    message: string
    data?: any
    meta?: any
}

export const JSONSuccessResponse = (data?: any, meta?: any): Response => {
    let jsonBody: APIResponse = {
        code: 200,
        message: 'success',
        data,
        meta
    }
    return Response.json(jsonBody, { status: 200 })
}