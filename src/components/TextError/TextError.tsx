interface ErrorProps {
    children: React.ReactNode
    component: React.ReactNode
}

function TextError (props:ErrorProps) {
  return <div className='error'>{props.children}</div>
}

export default TextError
