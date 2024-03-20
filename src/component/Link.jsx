
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className=" hover:bg-green-300">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes={
    route: PropTypes.object
}

export default Link;