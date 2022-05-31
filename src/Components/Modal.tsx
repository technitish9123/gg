import React, { useState } from "react";
import axios from "axios";
const Modal = (props: {
  userAddress: string | number | readonly string[] | undefined;
}) => {
  const [tweetText, setTweetText] = useState("");
  console.log(tweetText);
  // const tweet =async()=>{}
  const [showModal, setShowModal] = React.useState(false);

  const token =
    "AAAAAAAAAAAAAAAAAAAAACoSdAEAAAAAoe%2FKaloVegCylTKaYJVkKykiFzk%3DySOmO3FfM7HB5OxJYLhZIm34ZXn1vjOBpDQtBGbSf1CauI7e2Y";

  const endpointURL =
    "https://api.twitter.com/2/tweets?ids=1530848814969630722";

  const tweet = async () => {
    const params = {
      ids: "1530848814969630722",
    };

    // this is the HTTP header that adds bearer token authentication
    await axios
      .get(endpointURL, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // (async () => {

  //     try {
  //         // Make request
  //         const response = await tweet();
  //         console.dir(response, {
  //             depth: null
  //         });

  //     } catch (e) {
  //         console.log(e);
  //         process.exit(-1);
  //     }
  //     process.exit();
  // })();
  return (
    <>
      <button
        className="bg-pink-500 text-black active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center text-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Tweet </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="grid ">
                    <label> Enter Name</label>
                    <input
                      type="text"
                      className="border border-solid border-black m-2"
                    />
                    <br />
                    <label> Enter Email</label>
                    <input
                      type="text"
                      className="border border-solid border-black m-2"
                    />
                    <br />
                    <label> Wallet adress</label>
                    <input
                      type="text"
                      value={props.userAddress}
                      className="border border-solid border-black m-2"
                    />
                    <label> tweet </label>
                    <textarea
                      cols={40}
                      rows={4}
                      onChange={(e) => setTweetText(e.target.value)}
                      value={` Welcome to @gamegeeks tweet this messages to get your account verified: ${props.userAddress}`}
                      className="border border-solid border-black m-4"
                    />
                  </div>
                  <button
                    className="text-blue-500  border-solid border-black m-4  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a
                      href={`https://twitter.com/intent/tweet?text=${tweetText}`}
                      target="_about:blank"
                    >
                      Tweet
                    </a>
                  </button>
                  {/* test */}
                  <button
                    className="text-blue-500  border-solid border-black m-4  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={tweet}
                  >
                    hello
                  </button>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-blue-800 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
