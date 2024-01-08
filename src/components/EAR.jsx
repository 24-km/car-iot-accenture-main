import React, { useEffect } from "react";

function EAR({ ear }) {
  useEffect(() => console.log(ear), []);
  if (ear >= 0.3) {
    return (
      <>
        <path
          fill="#FFFFFE"
          fillRule="evenodd"
          d="M669.829 237.325c-17.963 0-32.527-14.564-32.527-32.527s14.564-32.527 32.527-32.527c5.02 0 9.753 1.171 13.998 3.201a10.84 10.84 0 0 0 7.721 18.309 10.836 10.836 0 0 0 7.607-2.981 32.324 32.324 0 0 1 3.201 13.998c0 17.963-14.564 32.527-32.527 32.527Zm0-86.739c-29.941 0-54.212 24.271-54.212 54.212 0 29.941 24.271 54.212 54.212 54.212 29.942 0 54.212-24.271 54.212-54.212 0-29.941-24.27-54.212-54.212-54.212Z"
          clipRule="evenodd"
        />
        <mask
          id="p"
          width={174}
          height={174}
          x={583}
          y={118}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path
            fill="#FFFFFE"
            d="M583.258 291.526v-173.37h173.316v173.37H583.258Z"
          />
        </mask>
        <g mask="url(#p)">
          <path
            fill="#FFFFFE"
            fillRule="evenodd"
            d="M675.248 193.961c-.816 0-1.583.195-2.28.518a10.64 10.64 0 0 0-3.141-.518 10.845 10.845 0 0 0-10.017 6.693 10.84 10.84 0 0 0 14.166 14.166 10.837 10.837 0 0 0 6.693-10.017c0-1.1-.211-2.141-.518-3.141a5.357 5.357 0 0 0 .518-2.28 5.418 5.418 0 0 0-5.421-5.421Z"
            clipRule="evenodd"
          />
        </g>
        <mask
          id="q"
          width={174}
          height={174}
          x={583}
          y={118}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path
            fill="#4C5665"
            d="M583.258 291.526v-173.37h173.316v173.37H583.258Z"
          />
        </mask>
        <g mask="url(#q)">
          <path
            fill="#4C5665"
            fillRule="evenodd"
            d="M669.833 259.014c-29.941 0-54.212-24.271-54.212-54.212 0-29.942 24.271-54.212 54.212-54.212 29.941 0 54.212 24.27 54.212 54.212 0 29.941-24.271 54.212-54.212 54.212Zm0-140.952c-47.904 0-86.739 38.835-86.739 86.74 0 47.904 38.835 86.739 86.739 86.739s86.739-38.835 86.739-86.739c0-47.905-38.835-86.74-86.739-86.74Z"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="#4C5665"
          fillRule="evenodd"
          d="M680.667 204.808a10.845 10.845 0 0 1-12.958 10.635 10.848 10.848 0 0 1-8.519-8.519 10.843 10.843 0 0 1 10.634-12.958c1.101 0 2.141.211 3.142.518a5.393 5.393 0 0 1 2.279-.518 5.422 5.422 0 0 1 5.422 5.421c0 .816-.193 1.583-.518 2.28.306 1 .518 2.041.518 3.141Zm10.842-10.842a10.844 10.844 0 0 1-7.687-18.484 32.353 32.353 0 0 0-13.998-3.201c-17.963 0-32.527 14.564-32.527 32.527 0 17.964 14.564 32.528 32.527 32.528s32.527-14.564 32.527-32.528c0-5.02-1.171-9.752-3.201-13.997a10.803 10.803 0 0 1-7.641 3.155Z"
          clipRule="evenodd"
        />
        <text
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Inter"
          fontSize={29.034}
          fontWeight="bold"
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={532.194} y={336.402}>
            {"EYE ASPECT RATIO"}
          </tspan>
        </text>
        <rect
          width={1318}
          height={668}
          x={11}
          y={9}
          stroke="#01EBD4"
          strokeWidth={18}
          rx={214}
        />
      </>
    );
  } else if ((ear >= 0.2)) {
    return (
      <>
        <path
          fill="#FFFFFE"
          fillRule="evenodd"
          d="M670.828 237.516c-18.017 0-32.625-14.608-32.625-32.625 0-18.018 14.608-32.625 32.625-32.625 5.035 0 9.782 1.174 14.04 3.21a10.877 10.877 0 0 0 7.745 18.365 10.878 10.878 0 0 0 7.629-2.99 32.424 32.424 0 0 1 3.211 14.04c0 18.017-14.608 32.625-32.625 32.625Zm0-87c-30.031 0-54.375 24.343-54.375 54.375 0 30.031 24.344 54.375 54.375 54.375s54.375-24.344 54.375-54.375c0-30.032-24.344-54.375-54.375-54.375Z"
          clipRule="evenodd"
        />
        <mask
          id="g"
          width={174}
          height={174}
          x={584}
          y={118}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="#FFFFFE" d="M584 291.891V118h173.837v173.891H584Z" />
        </mask>
        <g mask="url(#g)">
          <path
            fill="#FFFFFE"
            fillRule="evenodd"
            d="M676.273 194.023c-.818 0-1.587.196-2.286.52a10.709 10.709 0 0 0-3.151-.52 10.877 10.877 0 0 0-7.69 18.565 10.871 10.871 0 0 0 11.852 2.358 10.871 10.871 0 0 0 6.713-10.048c0-1.103-.212-2.147-.519-3.151a5.38 5.38 0 0 0 .519-2.286 5.438 5.438 0 0 0-5.438-5.438Z"
            clipRule="evenodd"
          />
        </g>
        <mask
          id="h"
          width={174}
          height={174}
          x={584}
          y={118}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="#4C5665" d="M584 291.891V118h173.837v173.891H584Z" />
        </mask>
        <g mask="url(#h)">
          <path
            fill="#4C5665"
            fillRule="evenodd"
            d="M670.836 259.273c-30.031 0-54.375-24.343-54.375-54.375 0-30.031 24.344-54.375 54.375-54.375s54.375 24.344 54.375 54.375c0 30.032-24.344 54.375-54.375 54.375Zm0-141.375c-48.049 0-87 38.952-87 87 0 48.049 38.951 87 87 87 48.048 0 87-38.951 87-87 0-48.048-38.952-87-87-87Z"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="#4C5665"
          fillRule="evenodd"
          d="M681.703 204.891a10.873 10.873 0 0 1-12.996 10.666 10.88 10.88 0 0 1-8.545-8.545 10.872 10.872 0 0 1 10.666-12.996c1.104 0 2.148.212 3.151.519a5.415 5.415 0 0 1 2.287-.519 5.44 5.44 0 0 1 3.845 1.592 5.44 5.44 0 0 1 1.592 3.845c0 .818-.193 1.588-.519 2.287.307 1.003.519 2.047.519 3.151Zm10.875-10.875a10.876 10.876 0 0 1-7.71-18.54 32.423 32.423 0 0 0-14.04-3.21c-18.017 0-32.625 14.607-32.625 32.625 0 18.017 14.608 32.625 32.625 32.625s32.625-14.608 32.625-32.625c0-5.035-1.174-9.782-3.211-14.04a10.841 10.841 0 0 1-7.664 3.165Z"
          clipRule="evenodd"
        />
        <rect
          width={58.971}
          height={123.038}
          x={609.32}
          y={205.258}
          fill="#2F3237"
          rx={29.485}
          transform="rotate(-90 609.32 205.258)"
        />
        <text
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Inter"
          fontSize={29.034}
          fontWeight="bold"
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={532.194} y={336.402}>
            {"EYE ASPECT RATIO"}
          </tspan>
        </text>
        <rect
          width={1318}
          height={668}
          x={11}
          y={9}
          stroke="#01EBD4"
          strokeWidth={18}
          rx={214}
        />
      </>
    );
  } else if (ear >=0) {
    return (
      <>
        <path
          fill="#FFFFFE"
          fillRule="evenodd"
          d="M670.41 236.948c-17.93 0-32.468-14.537-32.468-32.468 0-17.93 14.538-32.468 32.468-32.468 5.011 0 9.735 1.169 13.972 3.196a10.821 10.821 0 0 0 15.301 15.3 32.266 32.266 0 0 1 3.195 13.972c0 17.931-14.537 32.468-32.468 32.468Zm0-86.581c-29.887 0-54.113 24.227-54.113 54.113 0 29.887 24.226 54.114 54.113 54.114s54.113-24.227 54.113-54.114c0-29.886-24.226-54.113-54.113-54.113Z"
          clipRule="evenodd"
        />
        <mask
          id="g"
          width={173}
          height={174}
          x={584}
          y={118}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="#FFFFFE" d="M584 291.054V118h173v173.054H584Z" />
        </mask>
        <g mask="url(#g)">
          <path
            fill="#FFFFFE"
            fillRule="evenodd"
            d="M675.82 193.656c-.814 0-1.58.195-2.276.517a10.665 10.665 0 0 0-3.135-.517 10.825 10.825 0 0 0-7.653 18.476 10.828 10.828 0 0 0 11.794 2.346 10.823 10.823 0 0 0 6.681-9.999c0-1.099-.211-2.138-.517-3.136a5.348 5.348 0 0 0 .517-2.275 5.41 5.41 0 0 0-5.411-5.412Z"
            clipRule="evenodd"
          />
        </g>
        <mask
          id="h"
          width={173}
          height={174}
          x={584}
          y={118}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="#4C5665" d="M584 291.054V118h173v173.054H584Z" />
        </mask>
        <g mask="url(#h)">
          <path
            fill="#393D42"
            fillRule="evenodd"
            d="M670.409 258.593c-29.886 0-54.113-24.227-54.113-54.113 0-29.887 24.227-54.114 54.113-54.114 29.887 0 54.114 24.227 54.114 54.114 0 29.886-24.227 54.113-54.114 54.113Zm0-140.695c-47.817 0-86.581 38.764-86.581 86.582 0 47.817 38.764 86.581 86.581 86.581s86.581-38.764 86.581-86.581c0-47.818-38.764-86.582-86.581-86.582Z"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="#4C5665"
          fillRule="evenodd"
          d="M681.236 204.476a10.821 10.821 0 0 1-12.934 10.614 10.822 10.822 0 0 1 2.111-21.437c1.099 0 2.138.211 3.136.517a5.394 5.394 0 0 1 2.276-.517 5.41 5.41 0 0 1 5.411 5.411 5.35 5.35 0 0 1-.517 2.276c.306.998.517 2.037.517 3.136Zm10.823-10.823a10.821 10.821 0 0 1-7.674-18.45 32.266 32.266 0 0 0-13.972-3.195c-17.93 0-32.468 14.537-32.468 32.468 0 17.93 14.538 32.468 32.468 32.468 17.931 0 32.468-14.538 32.468-32.468 0-5.011-1.169-9.735-3.195-13.972a10.787 10.787 0 0 1-7.627 3.149Z"
          clipRule="evenodd"
        />
        <rect
          width={104.332}
          height={122.445}
          x={609.188}
          y={250.484}
          fill="#282A2B"
          rx={52.166}
          transform="rotate(-90 609.188 250.484)"
        />
        <text
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Inter"
          fontSize={29.034}
          fontWeight="bold"
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={532.194} y={336.402}>
            {"EYE ASPECT RATIO"}
          </tspan>
        </text>
        <rect
          width={1318}
          height={668}
          x={11}
          y={9}
          stroke="#01EBD4"
          strokeWidth={18}
          rx={214}
        />
      </>
    );
  }
}

export default EAR;
