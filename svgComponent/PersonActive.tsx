import React from 'react'

const PersonActive = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={`text-green-500 ${props.className}`} // default Tailwind color
    >
      <path
        d="M17.6961 1.70711C18.0866 1.31658 18.0866 0.68342 17.6961 0.292894C17.3056 -0.0976304 16.6724 -0.0976315 16.2819 0.292891L14.3431 2.23163L14.0613 1.94974C13.6707 1.55922 13.0376 1.55922 12.647 1.94974C12.2565 2.34027 12.2565 2.97343 12.647 3.36395L13.636 4.35295C14.0266 4.74347 14.6597 4.74347 15.0503 4.35295L17.6961 1.70711Z"
        fill="currentColor"
      />
      <path
        d="M11 4.50002C11 6.70915 9.20914 8.50002 7 8.50002C4.79086 8.50002 3 6.70915 3 4.50002C3 2.29088 4.79086 0.500015 7 0.500015C9.20914 0.500015 11 2.29088 11 4.50002Z"
        fill="currentColor"
      />
      <path
        d="M7 19.5C4.13273 19.5 -1.35095 18.1701 0.305653 15.5C1.55143 13.4921 4.07123 11.5 7 11.5C9.92877 11.5 12.4486 13.4921 13.6943 15.5C15.3509 18.1701 9.86726 19.5 7 19.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default PersonActive
