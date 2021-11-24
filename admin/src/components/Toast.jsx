import React from "react";

export default function Toast({ toast }) {
  return (
    <div
      className={
        toast.show
          ? "fixed top-28 right-1 z-50 opacity-100 transition-opacity"
          : "fixed top-28 right-1 z-50 opacity-0 transition-opacity"
      }
    >
      <div
        class="
      flex
      w-full
      max-w-sm
      mx-auto
      overflow-hidden
      bg-white
      rounded-lg
      shadow-md
      dark:bg-gray-800
    "
      >
        <div
          class={
            toast.success
              ? "flex items-center justify-center w-12 bg-green-500"
              : "flex items-center justify-center w-12 bg-red-500"
          }
        >
          <i
            class={
              toast.success
                ? "fas fa-check-circle"
                : "fas fa-exclamation-circle"
            }
          ></i>
        </div>

        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span
              class={
                toast.success
                  ? "font-semibold text-green-500 dark:text-green-400"
                  : "font-semibold text-red-500 dark:text-red-400"
              }
            >
              {toast.success ? "Success" : "Error"}
            </span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
              {toast.message ? toast.message : "Đã có lỗi xảy ra"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
