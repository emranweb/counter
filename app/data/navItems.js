// create a csont name navitems where put category of 3 nested children. the category parenet name is computer, mobile, laptop

const navItems = {
    computer: {
        name: "computer",
        children: {
            desktop: {
                name: "desktop",
                children: {
                    dell: {
                        name: "dell",
                    },
                    hp: {
                        name: "hp",
                    },
                },
            },
            laptop: {
                name: "laptop",
                children: {
                    dell: {
                        name: "dell",
                    },
                    hp: {
                        name: "hp",
                    },
                },
            },
        },
    },
    mobile: {
        name: "mobile",
        children: {
            samsung: {
                name: "samsung",
            },
            nokia: {
                name: "nokia",
            },
        },
    },
};
