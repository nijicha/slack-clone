export interface FormState {
  status: 'initial' | 'submitting' | 'success'
  userAction: 'initial' | 'typing' | 'idle'
}

export interface FormWithPasswordInput {
  isShowPassword: boolean
  showPasswordRules: boolean
}

export interface FormStateWithPasswordInput extends FormState, FormWithPasswordInput {}

export interface FormErrorsMsg {
  message: string
}
