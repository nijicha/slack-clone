import { render } from '../../lib/test-utils'

interface InputProps {
  formComponent: JSX.Element // This is not valid component is a form or not
  inputLabeledText: string | RegExp
}

export const findInput = ({ formComponent, inputLabeledText }: InputProps) => {
  const renderedComponent = render(formComponent)
  const input = renderedComponent.getByLabelText(inputLabeledText) as HTMLInputElement
  return {
    input,
    ...renderedComponent,
  }
}
