import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import * as react_native from 'react-native';
import { ViewProps, View } from 'react-native';
import * as tailwind_variants from 'tailwind-variants';
import * as _gluestack_ui_utils_nativewind_utils from '@gluestack-ui/utils/nativewind-utils';
import { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import * as _gluestack_ui_core_lib_esm_button_creator_types from '@gluestack-ui/core/lib/esm/button/creator/types';

type ModeType = 'light' | 'dark' | 'system';
declare function GluestackUIProvider({ mode, ...props }: {
    mode?: ModeType;
    children?: React.ReactNode;
    style?: ViewProps['style'];
}): react_jsx_runtime.JSX.Element;

declare const Button: React.ForwardRefExoticComponent<Omit<Omit<Omit<Omit<react_native.PressableProps & React.RefAttributes<View>, "ref"> & {
    context?: any;
} & React.RefAttributes<React.ForwardRefExoticComponent<react_native.PressableProps & React.RefAttributes<View>>> & _gluestack_ui_core_lib_esm_button_creator_types.InterfaceButtonProps, "ref"> & React.RefAttributes<Omit<react_native.PressableProps & React.RefAttributes<View>, "ref"> & {
    context?: any;
} & React.RefAttributes<React.ForwardRefExoticComponent<react_native.PressableProps & React.RefAttributes<View>>>>, "ref">, "context"> & VariantProps<_gluestack_ui_utils_nativewind_utils.TVReturnType<{
    action: {
        primary: string;
        secondary: string;
        positive: string;
        negative: string;
        default: string;
    };
    variant: {
        link: string;
        outline: string;
        solid: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
} | ({
    action: {
        primary: string;
        secondary: string;
        positive: string;
        negative: string;
        default: string;
    };
    variant: {
        link: string;
        outline: string;
        solid: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
} & {
    action: {
        primary: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        secondary: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        positive: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        negative: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        default: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
    };
    variant: {
        link: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        outline: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        solid: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
    };
    size: {
        xs: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        sm: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        md: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        lg: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
        xl: tailwind_variants.ClassValue | {
            base?: tailwind_variants.ClassValue;
        };
    };
}), undefined, "group/button rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40 gap-2", TVConfig<V, EV>, {
    action: {
        primary: string;
        secondary: string;
        positive: string;
        negative: string;
        default: string;
    };
    variant: {
        link: string;
        outline: string;
        solid: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, _gluestack_ui_utils_nativewind_utils.TVReturnType<{
    action: {
        primary: string;
        secondary: string;
        positive: string;
        negative: string;
        default: string;
    };
    variant: {
        link: string;
        outline: string;
        solid: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, "group/button rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40 gap-2", TVConfig<V, EV>, unknown, unknown, undefined>>> & {
    className?: string;
} & React.RefAttributes<Omit<react_native.PressableProps & React.RefAttributes<View>, "ref"> & {
    context?: any;
} & React.RefAttributes<React.ForwardRefExoticComponent<react_native.PressableProps & React.RefAttributes<View>>>>>;

export { Button as FGButton, GluestackUIProvider as FGUIProvider };
