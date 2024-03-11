import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IMenuItem} from '../@types/components';
import MainLayout from '../layouts/Main';

export default function ShippingPage({mainMenu, footerMenu}: IPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>About</h1>
				<div className='text-container'>
					<p>
					EXCEPTIONAL ONE is a global JEWELRY and IT parts. First and foremost, we are known for our excellent quality standard. IT resellers and end users choose to buy from Xtreme computer when they need affordably priced server components that they know they can count on. Reliable products and dependable team members are the cornerstones of our business.
					We specialize in both Jewelries like GOLD, DIAMOND, refurbished and new products across a wide range of components. 
					We sell memory, networking cards, HDDs, SSDs, transceivers, processors, GPUs, and servers.
					At EXCEPTIONAL ONE, we strive to make the buying experience as smooth as possible. You can count on us to process your order correctly the first time. We have a large warehouse situated in the central United States, and our listed stock is on-hand and ready to ship on the same day.
					EXCEPTIONAL ONE takes pride in its ability to process and ship your order quickly and accurately. Credit-approved orders are usually shipped in 2-3 days and they are placed using the most reliable and economical shipping methods available.
					</p>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			...menus
		}
	};
};

interface IPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}