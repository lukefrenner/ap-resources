import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as Fa6Icons from 'react-icons/fa6'
import * as GiIcons from 'react-icons/gi'
import APCalc from '../../components/Subjects/APCalc'
import Contact from '../../components/Contact'
import APWorld from '../../components/Subjects/APWorld'
import APPhysics1 from '../Subjects/APPhysics1'
import APLit from '../Subjects/APLit'
import APLang from '../Subjects/APLang'
import APChem from '../Subjects/APChem'
import APComp from '../Subjects/APComp'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },

    {
        title: 'Subjects',
        path: '#',
        icon: <IoIcons.IoIosSchool />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconClosed: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'AP English Literature and Composition',
                path: 'APLit',
                icon: <Fa6Icons.FaBook/>,
            },
            
            {
                title: 'AP English Language and Composition',
                path: 'APLang',
                icon: <FaIcons.FaBook/>,
            },

            {
                title: 'AP Physics 1',
                path: 'APPhysics1',
                icon: <GiIcons.GiMaterialsScience/>,
            },

            {
                title: 'AP Chemistry',
                path: 'APChem',
                icon: <MdIcons.MdScience/>,
            },

            {
                title: 'AP Calculus BC',
                path: 'APCalc',
                icon: <BiIcons.BiMath/>,
            },

            {
                title: 'AP Computer Science A',
                path: 'APComp',
                icon: <Fa6Icons.FaComputer/>,
            },

            {
                title: 'AP World History',
                path: 'APWorld',
                icon: <GiIcons.GiAncientColumns/>,
            },
        ]
    },

    {
        title: 'Contact',
        path: 'Contact',
        icon: <IoIcons.IoMdContact />,
    },

]