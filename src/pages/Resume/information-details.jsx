import { useParams } from "react-router-dom";

export default function InformationDetails() {
    const { idCandidate } = useParams();
    return (
        <div>
            Candidate selected : {idCandidate}
        </div>
    );
}