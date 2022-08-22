/* eslint-disable no-unused-vars */
export const logHttpRequest = async (req, res) => {
    const { rawHeaders, httpVersion, method, socket, url } = req;
    const { remoteAddress } = socket;
    const { statusCode, statusMessage, headers } = res;

    console.log(
        JSON.stringify({
            timestamp: new Date(Date.now()).toUTCString(),
            //rawHeaders,
            httpVersion,
            method,
            remoteAddress,
            url,
            statusCode,
            statusMessage,
            headers
        })
    );
};
