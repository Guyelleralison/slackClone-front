import { useContext } from "react";
import { UserContext } from "../../utils/context";

export default function Parameters() {
    const { user } = useContext(UserContext);
    return (
        <div>
            Parameters page: {user}
        </div>
    );
}