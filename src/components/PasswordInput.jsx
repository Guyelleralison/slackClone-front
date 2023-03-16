
export default function PasswordInput({value, onChange}) {
    return (
        <div>
            <input type="password" name="inputPassword" value={value} onChange={onChange}/>
        </div>
    );
}