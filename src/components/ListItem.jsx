import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItemLabel = styled.p`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`;

const ListItemDefaultLabel = styled.p`
    font-size: 22px;
    font-weight: bold;
    margin-left: 20px;
`;

const ListItemButton = styled.button`
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 15px;
    cursor: pointer;
`;
export default function ListItem({ lastName, firstName, profileTitle }) {
    return (
        <div className="item">
            <div className="names">
                <ListItemLabel>{lastName} {firstName}</ListItemLabel>
            </div>
            <div>
                <ListItemDefaultLabel>{profileTitle}</ListItemDefaultLabel>
            </div>
            <div>
                <ListItemButton>
                    Modifier le profil
                </ListItemButton>
            </div>
        </div>
    );
}

ListItem.propTypes = {
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    profileTitle: PropTypes.string
}