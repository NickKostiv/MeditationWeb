import React, { useState } from "react";
import Link from "next/link";
import discountData from "../../data/discount.json";
import Image from "next/image";

import PayPalIcon from "../../../public/paypal.svg";
import ApplePayIcon from "../../../public/ApplePay.svg";
import GPaycon from "../../../public/gpay.svg";

import VisaIcon from "../../../public/visa.svg";
import MasterCardIcon from "../../../public/mastercard.svg";
import AmexIcon from "../../../public/amex.svg";
import JCBIcon from "../../../public/jcb.svg";
import CVVIcon from "../../../public/cvv.svg";

export default function PaymentForm() {
  const [isDiscountFormOpen, setDiscountFormOpen] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState("");
  const [discountInput, setDiscountInput] = useState("");
  const [error, setError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  const validateCardNumber = number => {
    const formattedNumber = number.replace(/\s/g, "");
    if (formattedNumber.length !== 16)
      return "Enter a valid credit card number";
    return null;
  };

  const validateCardName = name => {
    if (!/^[A-Za-z\s]+$/.test(name)) return "Name must contain only letters";
    if (name.trim().length < 2) return "Enter a valid cardholder name";
    return null;
  };

  const validateExpirationDate = date => {
    const [month, year] = date.split("/").map(val => val.trim());
    if (!month || !year || isNaN(month) || isNaN(year))
      return "Enter a valid expiry";
    if (month.length > 2 || year.length > 2) return "Invalid expiry format";
    if (Number(month) < 1 || Number(month) > 12) return "Invalid month";
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    if (
      Number(year) < currentYear ||
      (Number(year) === currentYear && Number(month) < currentMonth)
    )
      return "Expiry cannot be in the past";
    return null;
  };

  const validateCvv = code => {
    if (code.length !== 3 || isNaN(code)) return "Invalid CVV";
    return null;
  };

  const handleValidation = field => {
    let fieldErrors = { ...errors };

    if (field === "cardNumber") {
      fieldErrors.cardNumber = validateCardNumber(cardNumber);
    } else if (field === "cardName") {
      fieldErrors.cardName = validateCardName(cardName);
    } else if (field === "expirationDate") {
      fieldErrors.expirationDate = validateExpirationDate(expirationDate);
    } else if (field === "cvv") {
      fieldErrors.cvv = validateCvv(cvv);
    }

    setErrors(fieldErrors);
  };

  const formatCardNumber = value => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  const handleExpirationInput = value => {
    const formattedValue = value.replace(/\D/g, "").slice(0, 4);
    if (formattedValue.length > 2) {
      return formattedValue.slice(0, 2) + "/" + formattedValue.slice(2);
    }
    return formattedValue;
  };

  const handleCvvInput = value => {
    return value.replace(/\D/g, "").slice(0, 3);
  };

  const handleCardNameInput = value => {
    return value.replace(/[^A-Za-z\s]/g, "");
  };

  const handleAddDiscount = () => {
    const validDiscount = discountData.find(
      discount => discount.code === discountInput.trim()
    );
    if (validDiscount) {
      setAppliedDiscount(discountInput.trim());
      setDiscountFormOpen(false);
      setError("");
    } else {
      setError("You need to enter a valid discount code.");
    }
  };

  const handleRemoveDiscount = () => {
    setAppliedDiscount("");
  };

  return (
    <div className="p-4">
      {!isDiscountFormOpen && (
        <>
          {appliedDiscount ? (
            <div className="flex items-center justify-between bg-gray-200 px-[12px] py-[4px] rounded-[20px]">
              <span className="text-gray-600 text-[12px]">
                Discount Applied
              </span>
              <button className="text-gray-500" onClick={handleRemoveDiscount}>
                ✖
              </button>
            </div>
          ) : (
            <button
              className="ml-auto text-[12px] font-normal underline underline-offset-4"
              onClick={() => setDiscountFormOpen(true)}>
              Add Discount
            </button>
          )}
          <div className="mt-4 flex justify-center items-center bg-white py-2 px-7 border-[1px] border-[#179bd7] rounded-[30px]">
            <button>
              <Image
                src={PayPalIcon}
                width={98}
                height={24}
                alt="paypal method"
                className="my-auto w-full max-w-[98px] h-full max-h-[24px]"
              />
            </button>
          </div>
          <div className="mt-4 flex justify-center items-center bg-white py-2 px-7 border-[1px] border-[#179bd7] rounded-[30px]">
            <button>
              <Image
                src={ApplePayIcon}
                width={98}
                height={24}
                alt="Apple Pay"
                className="my-auto w-full max-w-[98px] h-full max-h-[24px]"
              />
            </button>
          </div>

          <div className="mt-4 flex justify-center items-center bg-white py-2 px-7 border-[1px] border-[#179bd7] rounded-[30px]">
            <button>
              <Image
                src={GPaycon}
                width={98}
                height={24}
                alt="Google Pay"
                className="my-auto w-full max-w-[98px] h-full max-h-[24px]"
              />
            </button>
          </div>
          <div className="">
            <div className="flex items-center justify-center my-4">
              <div className="border-t border-white flex-grow"></div>
              <span className="px-4 text-white text-[16px]">
                Or pay by card
              </span>
              <div className="border-t border-white flex-grow"></div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label
                className="block text-white text-start text-[14px] mb-2"
                htmlFor="card-number">
                Card number
              </label>
              <div className="relative">
                <input
                  id="card-number"
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={cardNumber}
                  onChange={e =>
                    setCardNumber(formatCardNumber(e.target.value))
                  }
                  onBlur={() => handleValidation("cardNumber")}
                  className={`w-full border ${
                    errors.cardNumber ? "border-red-500" : "border-gray-300"
                  } text-[15px] rounded-[4px] bg-white text-gray-800 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 ${
                    errors.cardNumber
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-[2px]">
                  <Image src={VisaIcon} alt="visa icon" height={24} />
                  <Image
                    src={MasterCardIcon}
                    alt="Mastercard icon"
                    height={24}
                  />
                  <Image src={AmexIcon} alt="Amex icon" height={24} />
                  <Image src={JCBIcon} alt="JCB icon" height={24} />
                </div>
              </div>
              {errors.cardNumber && (
                <p className="text-red-500 text-[12px]">{errors.cardNumber}</p>
              )}
            </div>

            <div>
              <label
                className="block text-start text-white text-[14px] mb-2"
                htmlFor="name-on-card">
                Name on card
              </label>
              <input
                id="name-on-card"
                type="text"
                placeholder="Cardholder name"
                value={cardName}
                onChange={e => setCardName(handleCardNameInput(e.target.value))}
                onBlur={() => handleValidation("cardName")}
                className={`w-full border ${
                  errors.cardName ? "border-red-500" : "border-gray-300"
                } rounded-[8px] bg-white text-gray-800 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 ${
                  errors.cardName ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
              {errors.cardName && (
                <p className="text-red-500 text-[12px]">{errors.cardName}</p>
              )}
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  className="block text-start text-white text-[14px] mb-2"
                  htmlFor="expiration-date">
                  Expiration date
                </label>
                <input
                  id="expiration-date"
                  type="text"
                  placeholder="MM / YY"
                  value={expirationDate}
                  onChange={e =>
                    setExpirationDate(handleExpirationInput(e.target.value))
                  }
                  onBlur={() => handleValidation("expirationDate")}
                  className={`w-full border ${
                    errors.expirationDate ? "border-red-500" : "border-gray-300"
                  } rounded-[8px] bg-white text-gray-800 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 ${
                    errors.expirationDate
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors.expirationDate && (
                  <p className="text-red-500 text-[12px]">
                    {errors.expirationDate}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label
                  className="block text-start text-white text-[14px] mb-2"
                  htmlFor="security-code">
                  Security code
                </label>
                <div className="relative">
                  <input
                    id="security-code"
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={e => setCvv(handleCvvInput(e.target.value))}
                    onBlur={() => handleValidation("cvv")}
                    className={`w-full border ${
                      errors.cvv ? "border-red-500" : "border-gray-300"
                    } rounded-[8px] bg-white text-gray-800 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 ${
                      errors.cvv ? "focus:ring-red-500" : "focus:ring-blue-500"
                    }`}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Image src={CVVIcon} alt="JCB icon" />
                  </div>
                </div>
                {errors.cvv && (
                  <p className="text-red-500 text-[12px]">{errors.cvv}</p>
                )}
              </div>
            </div>
          </form>
        </>
      )}

      {isDiscountFormOpen && (
        <div className="mt-4">
          {error && (
            <p className="text-red-500 text-[12px] text-start py-2 px-6 bg-[#ffd3d3] my-2">
              {error}
            </p>
          )}
          <label className="block text-white text-sm font-medium mb-2 text-start">
            Add Discount
          </label>
          <input
            type="text"
            value={discountInput}
            onChange={e => setDiscountInput(e.target.value)}
            className="w-full px-4 text-black py-2 border rounded-lg focus:outline-none"
          />

          <div className="flex flex-col mt-4">
            <button
              className="bg-[#12c1cc] text-white text-[22px] font-bold px-6 py-2 rounded-[20px]"
              onClick={handleAddDiscount}>
              Add Discount
            </button>
            <button
              className="bg-[white] mt-[10px] text-green-500 text-[14px] border-[2px] border-green-600 font-normal rounded-[5px] px-6 py-[8px]"
              onClick={() => setDiscountFormOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
      <p className="text-[#5F6364] text-[12px] text-start font-sans leading-[14px] mt-[25px]">
        This order process is conducted by our online reseller & Merchant of
        Record, Paddle.com, who also handles order-related inquiries and
        returns.Your data will be shared with Slowdive LTD for product
        fulfilment. Paddle.com Market Ltd, Judd House, 18-29 Mora Street, London
        EC1V 8BT
      </p>
      <div className="flex justify-start items-center mt-4">
        <Link
          href="/terms"
          className="text-[#5F6364] text-[12px] underline font-sans mx-2">
          Terms & Conditions
        </Link>
        <span className="text-[#5F6364]">|</span>
        <Link
          href="/privacy"
          className="text-[#5F6364] text-[12px] underline font-sans mx-2">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
