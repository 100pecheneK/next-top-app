import { AppContextProvider, AppContextType } from '../context/app.context'
import Layout from './Layout'

function withLayout<T extends Record<string, unknown> & AppContextType>(
	Component: React.FC<T>
) {
	function Hoc(props: T) {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		)
	}
	Hoc.displayName = 'WithLayout'
	return Hoc
}
export default withLayout
