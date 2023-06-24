/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AgencySubscriptionCreateFormInputValues = {
    name?: string;
    rif?: string;
    email?: string;
    phone?: string;
    subscriptionDate?: string;
    status?: string;
    scheduledDate?: string;
};
export declare type AgencySubscriptionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    rif?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    subscriptionDate?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    scheduledDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgencySubscriptionCreateFormOverridesProps = {
    AgencySubscriptionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    rif?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    subscriptionDate?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    scheduledDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AgencySubscriptionCreateFormProps = React.PropsWithChildren<{
    overrides?: AgencySubscriptionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AgencySubscriptionCreateFormInputValues) => AgencySubscriptionCreateFormInputValues;
    onSuccess?: (fields: AgencySubscriptionCreateFormInputValues) => void;
    onError?: (fields: AgencySubscriptionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgencySubscriptionCreateFormInputValues) => AgencySubscriptionCreateFormInputValues;
    onValidate?: AgencySubscriptionCreateFormValidationValues;
} & React.CSSProperties>;
export default function AgencySubscriptionCreateForm(props: AgencySubscriptionCreateFormProps): React.ReactElement;
