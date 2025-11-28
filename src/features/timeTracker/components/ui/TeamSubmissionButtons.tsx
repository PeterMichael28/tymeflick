import React from "react";

/* ───────────────────────────────
   REVIEW DETAILS BUTTON
──────────────────────────────── */
export const ReviewDetailsButton: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded cursor-pointer border border-[#0B54FF] px-3 py-1.5 text-sm text-[#0B54FF] bg-[#CCDBFF80] hover:bg-[#CCDBFF80] transition"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
      >
        <path
          d="M8.33333 5.41667C8.33333 4.95643 7.96024 4.58333 7.5 4.58333C7.03976 4.58333 6.66667 4.95643 6.66667 5.41667V9.58333C6.66667 10.0436 7.03976 10.4167 7.5 10.4167H10C10.4602 10.4167 10.8333 10.0436 10.8333 9.58333C10.8333 9.1231 10.4602 8.75 10 8.75H8.33333V5.41667Z"
          fill="#0B54FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33333 0C3.73096 0 0 3.73096 0 8.33333C0 12.9357 3.73096 16.6667 8.33333 16.6667C12.9357 16.6667 16.6667 12.9357 16.6667 8.33333C16.6667 3.73096 12.9357 0 8.33333 0ZM1.66667 8.33333C1.66667 4.65143 4.65143 1.66667 8.33333 1.66667C12.0152 1.66667 15 4.65143 15 8.33333C15 12.0152 12.0152 15 8.33333 15C4.65143 15 1.66667 12.0152 1.66667 8.33333Z"
          fill="#0B54FF"
        />
      </svg>
      <span>Review Details</span>
    </button>
  );
};

/* ───────────────────────────────
   APPROVE BUTTON (Dynamic)
──────────────────────────────── */
export const ApproveButton: React.FC<{ isAdmin?: boolean; onClick?: () => void }> = ({
  isAdmin = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded cursor-pointer border border-[#036732] px-3 py-1.5 text-sm text-[#036732] bg-[#1FC16B1A] hover:bg-green-50 transition"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
      >
        <path
          d="M11.3962 7.28121C11.7356 6.97036 11.7587 6.44323 11.4479 6.10383C11.137 5.76443 10.6099 5.74128 10.2705 6.05212L7.19377 8.86998L6.39617 8.13949C6.05677 7.82864 5.52964 7.85179 5.21879 8.19119C4.90795 8.53059 4.9311 9.05772 5.2705 9.36857L6.63093 10.6145C6.94945 10.9063 7.43808 10.9063 7.7566 10.6145L11.3962 7.28121Z"
          fill="#036732"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33333 0C3.73096 0 0 3.73096 0 8.33333C0 12.9357 3.73096 16.6667 8.33333 16.6667C12.9357 16.6667 16.6667 12.9357 16.6667 8.33333C16.6667 3.73096 12.9357 0 8.33333 0ZM1.66667 8.33333C1.66667 4.65143 4.65143 1.66667 8.33333 1.66667C12.0152 1.66667 15 4.65143 15 8.33333C15 12.0152 12.0152 15 8.33333 15C4.65143 15 1.66667 12.0152 1.66667 8.33333Z"
          fill="#036732"
        />
      </svg>
      <span>{isAdmin ? "Force Approve" : "Approve"}</span>
    </button>
  );
};

/* ───────────────────────────────
   REJECT BUTTON (Dynamic)
──────────────────────────────── */
export const RejectButton: React.FC<{ isAdmin?: boolean; onClick?: () => void }> = ({
  isAdmin = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded border cursor-pointer border-[#D00416] px-3 py-1.5 text-sm text-[#D00416] bg-[#FB37481A] hover:bg-red-50 transition"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3.5 h-3.5"
      >
        <path
          d="M1.42259 0.244078C1.09715 -0.0813591 0.569515 -0.0813594 0.244078 0.244078C-0.0813592 0.569515 -0.0813593 1.09715 0.244078 1.42259L4.36887 5.54738L0.244078 9.67217C-0.0813593 9.99761 -0.0813592 10.5252 0.244078 10.8507C0.569515 11.1761 1.09715 11.1761 1.42259 10.8507L5.54738 6.72589L9.67217 10.8507C9.99761 11.1761 10.5252 11.1761 10.8507 10.8507C11.1761 10.5252 11.1761 9.99761 10.8507 9.67217L6.72589 5.54738L10.8507 1.42259C11.1761 1.09715 11.1761 0.569515 10.8507 0.244078C10.5252 -0.0813591 9.99761 -0.0813588 9.67217 0.244078L5.54738 4.36887L1.42259 0.244078Z"
          fill="#D00416"
        />
      </svg>
      <span>{isAdmin ? "Force Reject" : "Reject"}</span>
    </button>
  );
};
