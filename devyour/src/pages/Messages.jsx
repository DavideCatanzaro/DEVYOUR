import React from "react";
import InputField from "../components/atoms/InputField";
import ProfileCard from "../components/shared/ProfileCard";
import UsersSuggested from "../components/shared/UsersSuggested";
import Navbar from "../components/shared/Navbar";
import ButtonSend from "../components/atoms/ButtonSend";

function Messages() {
  return (
    <>
      <div className="flex max-w-7xl mx-auto">
        <main className="flex gap-6 container px-2 mx-auto">
          <Navbar />
          <div className="basis-2/3 grow">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col w-2/5  overflow-y-auto ">
                <div className="border-y border-x border-blue rounded-tl-lg py-4 px-2 ">
                  <InputField
                    type="text"
                    placeholder="search chatting"
                    input="primaryInputVariant"
                  />
                </div>

                <div className="flex flex-row py-4 px-2 justify-center items-center border-r-4 border-blue">
                  <div className="w-1/4">
                    <img src="https://source.unsplash.com/_7LbC5J-jw4/600x600" className="object-cover h-12 w-12 rounded-full" alt=""/>
                  </div>
                  <div className="w-full ml-2">
                    <div className="text-lg text-blue hover:text-pink font-semibold">
                      Luis1994
                    </div>
                    <span className="text-gray">Pick me at 9:00 Am</span>
                  </div>
                </div>

                <div className="flex flex-row py-4 px-2 items-center">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/otT2199XwI8/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg text-blue hover:text-pink font-semibold">
                      Everest Trip 2021
                    </div>
                    <span className="text-gray-500">Hi Sam, Welcome</span>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-2 items-center">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg text-blue hover:text-pink font-semibold">
                      MERN Stack
                    </div>
                    <span className="text-gray-500">Lusi : Thanks Everyone</span>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-2 items-center">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg text-blue hover:text-pink font-semibold">
                      Javascript Indonesia
                    </div>
                    <span className="text-gray-500">
                      Evan : some one can fix this
                    </span>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-2 items-center">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg text-blue hover:text-pink font-semibold">
                      Javascript Indonesia
                    </div>
                    <span className="text-gray-500">
                      Evan : some one can fix this
                    </span>
                  </div>
                </div>

                <div className="flex flex-row py-4 px-2  items-center ">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg text-blue hover:text-pink font-semibold">
                      Javascript Indonesia
                    </div>
                    <span className="text-grey">
                      Evan : some one can fix this
                    </span>
                  </div>
                </div>
              </div>

              {/* chatconversation */}
              <div className="basis-2/3 w-full px-5 flex flex-col overflow-auto justify-between">
                <div className="flex flex-col mt-5">
                  <div className="flex justify-end mb-4">
                    <div className="mr-2 py-3 px-4 bg-blue rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                      Welcome to group everyone !
                    </div>
                    <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt="" />
                  </div>
                  <div className="flex justify-start mb-4">
                    <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt="" />
                    <div className="ml-2 py-3 px-4 bg-pink rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                      Lorem ipsum 
                    </div>
                  </div>
                  <div className="flex justify-end mb-4">
                    <div>
                      <div className="mr-2 py-3 px-4 bg-blue rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                      dolor sit amet consectetur adipisicing elit. 
                      </div>
                      <div className="mt-4 mr-2 py-3 px-4 bg-blue rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                      Quaerat at praesentium, aut ullam delectus odio error sit rem.
                      </div>
                      <div className="mt-4 mr-2 py-3 px-4 bg-blue rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                      Architecto nulla doloribus laborum illo rem enim dolor odio saepe, consequatur quas?
                      </div>
                    </div>
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-start mb-4">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                    />
                    <div className="ml-2 py-3 px-4 bg-pink rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                      happy holiday guys!
                    </div>
                  </div>
                </div>
                <div className="py-5 flex gap-2">
                  <InputField
                    type="text"
                    placeholder="type your message here..."
                    input="primaryInputVariant"
                  />
                  <ButtonSend />
                </div>
              </div>

              {/* 
              Banner pubblicitario laterale 
              <div className="w-2/5 border-y border-x rounded-r-lg px-5">
                <div className="flex flex-col">
                  <div className="font-semibold text-xl py-4">Mern Stack Group</div>
                  <img
                    src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                    className="object-cover rounded-xl h-64"
                    alt=""
                  />
                  <div className="font-semibold py-4">Created 22 Sep 2021</div>
                  <div className="font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                    perspiciatis!
                  </div>
                </div>
              </div> */}

            </div>
          </div>

          <aside className="basis-1/6 hidden md:block">
            <div className="sticky top-4">
              <ProfileCard />
              <UsersSuggested />
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}

export default Messages;