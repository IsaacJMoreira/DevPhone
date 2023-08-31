export function login({ email, password }: any) {

    return new Promise<void>((resolve, reject) => {
        setTimeout(function () {
            if (password === 123456 && !!email) {
                resolve();
            } else {
                reject({ message: "e-mail or password wrong."})
            }
        })
    });
}