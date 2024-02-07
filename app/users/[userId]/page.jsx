export async function User(params) {
    console.log(params);
    return <h1>hello World</h1>;
}

async function generateStaticParams() {
    return [
        {
            params: {
                userId: "1",
            },
        },
    ];
}
