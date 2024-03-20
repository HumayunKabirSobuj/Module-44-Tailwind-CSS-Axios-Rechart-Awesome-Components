
import PropTypes from 'prop-types'
import Feature from './Feature';

const PriceOption = ({option}) => {
    const {name, price, features}=option;
    return ( 
        <div className='bg-green-500 rounded-xl p-4 flex flex-col text-white text-center'>
            <h2>
                <span className='text-5xl font-extrabold'> {price} </span>
                <span className='text-2xl'>/mon </span>
            </h2>
            <h4 className='text-3xl  my-8 flex-grow'>{name}</h4>
            {
                features.map((feature, index)=> <Feature key={index} feature={feature}></Feature>)
            }

            <button className='mt-12 bg-pink-300 w-full py-2 rounded-xl hover:bg-pink-800'>Buy Now</button>
            
        </div>
    );
};
PriceOption.propTypes={
    option: PropTypes.object
}
export default PriceOption;