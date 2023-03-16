
export default function SubmitButton({ children, onSubmit}) {
    return (
        <div>
            <button type="submit" onClick={() => { onSubmit() }}>{children}</button>
        </div>
    );
}