import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
        size: 'md',
    },
    // Obs: No exemplo dele foi necessário adicionar esse código para habilitar a opção de escolher o size nos controls, porém no meu não foi necessário e por isso comentei
    // argTypes: {
    //     size: {
    //         options: ['sm', 'md', 'lg'],
    //         control: {
    //             type: 'inline-radio'
    //         }
    //     }
    // }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
    },
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
    },
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testing with p tag</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}
