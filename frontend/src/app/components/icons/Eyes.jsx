"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export const EyeCheckbox = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="eyeCheckbox"
        checked={isVisible}
        onChange={handleToggle}
        className="hidden"
      />
      <label htmlFor="eyeCheckbox" className="cursor-pointer">
        {isVisible ? (
          <EyeIcon className="w-6 h-6 text-blue-600" />
        ) : (
          <EyeSlashIcon className="w-6 h-6 text-gray-500" />
        )}
      </label>
    </div>
  );
};
