'use client'

import {
    InputText,
    InputTextIcon,
    InputGroupText,
    InputGroupTextIcon,
    InputPassword,
    InputPasswordIcon,
    InputGroupPassword,
    InputGroupPasswordIcon
} from '@/components/atoms/form'

export default function Sample() {
    return (
        <main className='p-5'>
            <InputText value='' placeholder='placeholder' className='mb-3' />
            <InputTextIcon value='' icon={{ position: 'prepend', icon: 'bx-envelope' }} placeholder='email' className='mb-3' />
            <InputGroupText value='' placeholder='placeholder' label='Label' className='mb-3' errorText='error text' />
            <InputGroupTextIcon value='' icon={{ position: 'append', icon: 'bx-envelope' }} placeholder='placeholder' label='Label' className='mb-3' errorText='error text' />
            <InputPassword value='asdasd' placeholder='password' withShowPassword={true} className='mb-3' />
            <InputPasswordIcon value='asdasdasd' icon='bx-lock-alt' placeholder='password' withShowPassword={true} className='mb-3' />
            <InputGroupPassword value='asdasdasd' placeholder='password' withShowPassword={true} label='Label' className='mb-3' errorText='error text'  />
            <InputGroupPasswordIcon value='asdasdasd' icon='bx-lock-alt' placeholder='password' withShowPassword={true} label='Label' className='mb-3' errorText='error text'  />
        </main>
    )
}