'use client'

import { InputText, InputTextIcon, InputGroupText } from '@/components/atoms/form'

export default function Sample() {
    return (
        <main className='p-5'>
            <InputText placeholder='placeholder' className='mb-3' />
            <InputTextIcon prependIcon='bx-envelope' appendIcon='bx-user' parentClassName='mb-3' />
            <InputGroupText placeholder='input group' validatorType='success' validatorText='this is validator text' />
        </main>
    )
}