type navlisttype = {
    name: string,
    dontShow: boolean,
    privateLink: boolean,
    href: string
}
export const navlist:navlisttype[] = [
    {
        name: "Batch",
        dontShow: false,
        privateLink: true,
        href: '/batch'
    },
    {
        name: "Course",
        dontShow: false,
        privateLink: true,
        href: '/course'
    },
    {
        name: "Notes",
        privateLink: true,
        dontShow: false,
        href: '/notes'
    },
    {
        name: "Gallary",
        privateLink: false,
        dontShow: false,
        href: '/gallary',
    },
    {
        name: "About",
        href: "/about",
        privateLink: false,
        dontShow: true,
    },
    {
        name: "Contact",
        href: "/contact",
        privateLink: false,
        dontShow: true,
    }
]