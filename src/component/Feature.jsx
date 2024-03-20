import { AiFillCheckCircle } from "react-icons/ai";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"> <AiFillCheckCircle className="mr-2 text-black"></AiFillCheckCircle>  {feature}</p>
            
        </div>
    );
};
Feature.propTypes={
    feature: PropTypes.string
}

export default Feature;