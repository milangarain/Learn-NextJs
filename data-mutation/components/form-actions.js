 import { useFormStatus } from "react-dom"

export default function FormActions({}) {
	const {pending} = useFormStatus();
	if(pending) {
		return <p>Submitting</p>
	}
	return (
		<p className="form-actions">
          <button type="reset">Reset</button>
          <button>{"Create Post"}</button>
        </p>
	)
}