"use client";

import { useState } from "react";

function Note() {
    const [IsNoteShowing, setIsNoteShowing] = useState(false);

    return (
        <div
            className={`${
                IsNoteShowing
                    ? "shadow-notes-visitor"
                    : "bg-spot-profile-pannel shadow-spot-def"
            } mx-4 py-5 px-4 rounded-lg`}
        >
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-lg font-medium">Note to Visitors</h1>
                <button
                    onClick={() => {
                        setIsNoteShowing((prev) => {
                            return !prev;
                        });
                    }}
                    className="rounded-full border px-3 py-1 font-semibold"
                >
                    {IsNoteShowing ? `Hide ` : `Show `}
                    Note
                </button>
            </div>
            {IsNoteShowing && (
                <div className="mx-auto w-[99%] pt-3">
                    <p className="text-xl">
                        This Portfolio Website is Inspired by Spotify UI, with a
                        little bit of modification here and there so big credits
                        to them.
                    </p>
                    <p className="pt-3 text-xl">
                        Built using
                        <span className="font-semibold text-neutral-300">
                             {" Next.js Tailwind CSS"}
                        </span>
                         and 
                        <span className="font-semibold text-neutral-300">
                             {" Zustand"}
                        </span>
                        , Zustand may have been unecessary but i used it to get
                        an experience using it
                    </p>
                    <p className="pt-3 text-xl lg:hidden">
                        PS. Better if viewed in Desktop
                    </p>
                </div>
            )}
        </div>
    );
}

export default Note;
