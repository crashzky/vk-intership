import Props from './MainLayout.props';

const MainLayout: React.FC<Props> = ({ className = '', children, ...props }) => {
	return (
		<main
			className={`${className} h-screen w-screen flex items-center justify-center bg-[#D9D9D9]`}
			{...props}
		>
			{children}
		</main>
	);
};

export default MainLayout;
