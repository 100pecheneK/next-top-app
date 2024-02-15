import React, { createContext, useState } from 'react'
import { MenuItem } from '../types/menu.types'
import { TopLevelCategory } from '../types/page.types'

export type AppContextType = {
	menu: MenuItem[]
	firstCategory: TopLevelCategory
	setMenu?: (newMenu: MenuItem[]) => void
}

export const AppContext = createContext<AppContextType>({
	menu: [],
	firstCategory: TopLevelCategory.Courses,
})

export function AppContextProvider({
	menu,
	firstCategory,
	children,
}: AppContextType & { children: React.ReactNode }) {
	const [menuState, setMenuState] = useState(menu)
	function setMenu(newMenu: MenuItem[]) {
		setMenuState(newMenu)
	}
	return (
		<AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
			{children}
		</AppContext.Provider>
	)
}
