
import DrinkItem from '../DrinkItem';

const Coffee = ({ data }) => {
	return (
		<div>
			<h3 className='text-5xl pb-3 font-amoreCursive'>Coffee</h3>
			<div className='grid gap-4'>
				{data.map((drink) => (
					<div key={drink.id}>
						<DrinkItem
							name={drink.name}
							description={drink.description}
							prices={drink.pricing}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Coffee;
