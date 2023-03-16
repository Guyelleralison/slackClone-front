
export default function TextInput({ value, onChange }) {
    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    );
}