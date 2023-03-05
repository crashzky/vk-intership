import Header from '@components/Header';
import Field from '@components/Field';

import MainLayout from '@layouts/MainLayout';

const MainPage = (): JSX.Element => {
	return (
		<MainLayout>
			<section className='border-[1px] border-white bg-primary p-3 w-[290px] scale-150'>
				<Header />
				<Field />
			</section>
		</MainLayout>
	);
};

export default MainPage;
