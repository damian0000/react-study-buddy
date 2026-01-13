import React from 'react';
import PropTypes from 'prop-types'
import Button from 'components/atoms/Button/Button';
import { Wrapper, Average, name } from './UsersListItem.styles';



const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
    return (
        <Wrapper>
            <Average className="average" aria-label="Średnia ocena">
                {average}
            </Average>

            <div>
                <name>{name}</name>
                <p>{attendance}</p>
            </div>
            <Button />
        </Wrapper>
    );
};


UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,

    })
}
export default UsersListItem;