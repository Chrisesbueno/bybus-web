/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Payment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PaymentUpdateFormInputValues = {
    reference?: string;
    amount?: number;
    metadata?: string;
    userID?: string;
};
export declare type PaymentUpdateFormValidationValues = {
    reference?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    metadata?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentUpdateFormOverridesProps = {
    PaymentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    reference?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    metadata?: PrimitiveOverrideProps<TextAreaFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentUpdateFormProps = React.PropsWithChildren<{
    overrides?: PaymentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    payment?: Payment;
    onSubmit?: (fields: PaymentUpdateFormInputValues) => PaymentUpdateFormInputValues;
    onSuccess?: (fields: PaymentUpdateFormInputValues) => void;
    onError?: (fields: PaymentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentUpdateFormInputValues) => PaymentUpdateFormInputValues;
    onValidate?: PaymentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentUpdateForm(props: PaymentUpdateFormProps): React.ReactElement;
