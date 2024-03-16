import { assignUniqueIdsToTextNodes, addTimeToTextNode } from "@/helpers";
import React, { useContext } from "react";
import { createContext } from "react";

interface Props {
  children: React.ReactNode;
}

const defaultData = {
  audio:
    "https://firebasestorage.googleapis.com/v0/b/sync-audio-with-lexical.appspot.com/o/uploads%2Faudio-343.mp3?alt=media&token=2967f542-54c6-4cd3-9817-c0e6c69a63da",
  editorState: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "سورۃ الملک کورس ازنمرہ احمد",
              type: "text",
              version: 1,
              startTime: 0,
              endTime: 2,
              id: "textNode-0",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "heading",
          version: 1,
          tag: "h1",
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "سبق نمبر۲",
              type: "text",
              version: 1,
              startTime: 2,
              endTime: 3,
              id: "textNode-1",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "اعوذ باللہ من الشیطٰن الرجیم۔",
              type: "text",
              version: 1,
              startTime: 3,
              endTime: 6,
              id: "textNode-2",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "بسم اللہ الرحمن الرحیم۔",
              type: "text",
              version: 1,
              startTime: 6,
              endTime: 9,
              id: "textNode-3",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "میں پناہ مانگتی ہوں اللہ کی دھتکارے ہوئے شیطان سے۔",
              type: "text",
              version: 1,
              startTime: 9,
              endTime: 12,
              id: "textNode-4",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "شروع اللہ کے نام کے ساتھ جو بہت مہربان‘ نہایت رحم کرنے والا ہے۔",
              type: "text",
              version: 1,
              startTime: 12,
              endTime: 19,
              id: "textNode-5",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [],
          direction: "ltr",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "سورۃ الملک آیت۱تا ۲",
              type: "text",
              version: 1,
              id: "textNode-6",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "تَبَـٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ۔ ٱلَّذِى خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا ۚ وَهُوَ ٱلْعَزِيزُ ٱلْغَفُورُ ۔",
              type: "text",
              version: 1,
              startTime: 19,
              endTime: 36,
              id: "textNode-7",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [],
          direction: "ltr",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "’’بہت بابرکت ہے وہ اللہ",
              type: "text",
              version: 1,
              startTime: 36,
              endTime: 39,
              id: "textNode-8",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " جس کے ہاتھ میں ہے ساری بادشاہی",
              type: "text",
              version: 1,
              startTime: 39,
              endTime: 43,
              id: "textNode-9",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "اور وہ ہر چیز پر قادر ہے۔",
              type: "text",
              version: 1,
              startTime: 43,
              endTime: 46,
              id: "textNode-10",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "اس نے پیدا کیا موت اور زندگی کو",
              type: "text",
              version: 1,
              startTime: 46,
              endTime: 49,
              id: "textNode-11",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "تاکہ آزمائے وہ تم سب کو",
              type: "text",
              version: 1,
              startTime: 49,
              endTime: 50,
              id: "textNode-12",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "کہ کون تم میں سے کرتا ہے",
              type: "text",
              version: 1,
              startTime: 50,
              endTime: 52,
              id: "textNode-13",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "اچھے عمل",
              type: "text",
              version: 1,
              startTime: 52,
              endTime: 54,
              id: "textNode-14",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "اور وہ العزیز اور الغفور ہے۔‘‘",
              type: "text",
              version: 1,
              startTime: 54,
              endTime: 58,
              id: "textNode-15",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [],
          direction: "ltr",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "میں نے ان آیات کا ترجمہ کرتے ہوئے عزیز اور غفور کو ایسے ہی رہنے دیا ہے کیونکہ یہ وہ الفاظ ہیں جن کے ترجمے کا حق ایک لفظ میں ادا نہیں ہوسکتا۔",
              type: "text",
              version: 1,
              startTime: 58,
              endTime: 69,
              id: "textNode-16",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " ہم یہ بھی لکھ سکتے ہیں کہ وہ بہت زبردست‘بہت بخشنے والا ہے۔ ",
              type: "text",
              version: 1,
              startTime: 69,
              endTime: 72,
              id: "textNode-17",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "لیکن ان الفاظ کا معنی اس سے کہیں وسیع ہے اور ہم آج کے سبق میں آگے جا کے اسے پڑھیں گے۔",
              type: "text",
              version: 1,
              startTime: 72,
              endTime: 79,
              id: "textNode-18",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " ان شائ اللہ۔",
              type: "text",
              version: 1,
              startTime: 79,
              endTime: 80,
              id: "textNode-19",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [],
          direction: "ltr",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "جی تو اسٹوڈنٹس...",
              type: "text",
              version: 1,
              startTime: 80,
              endTime: 82,
              id: "textNode-20",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "آپ واپس آچکے ہیں اپنی ہفتہ وار کلاس میں۔ ",
              type: "text",
              version: 1,
              startTime: 82,
              endTime: 86,
              id: "textNode-21",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "یہ ہفتہ کیسا رہا؟",
              type: "text",
              version: 1,
              startTime: 86,
              endTime: 87,
              id: "textNode-22",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " یقیناََ مسئلے آئے ہوں گے۔ کسی سے لڑائی بھی ہوئی ہوگی۔",
              type: "text",
              version: 1,
              startTime: 87,
              endTime: 91,
              id: "textNode-23",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "کسی نے دل بھی دکھایا ہوگا اور آپ کا کوئی نقصان بھی ہوا ہوگا۔آپ سوچتے ہوں گے کہ مجھے تو برکتوں کا لالچ دے کر اس کورس میں لایا گیا تھا۔",
              type: "text",
              version: 1,
              startTime: 91,
              endTime: 100,
              id: "textNode-24",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " مجھے تو کہا گیا تھا کہ دعائیں قبول ہوں گی۔",
              type: "text",
              version: 1,
              startTime: 100,
              endTime: 103,
              id: "textNode-25",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: " برکتیں اتریں گی۔",
              type: "text",
              version: 1,
              startTime: 103,
              endTime: 105,
              id: "textNode-26",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " زندگی خوبصورت ہوجائے گی۔ ",
              type: "text",
              version: 1,
              startTime: 105,
              endTime: 106,
              id: "textNode-27",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "لیکن میری تو زندگی مشکل ہورہی ہے۔ دکھی ہورہی ہے۔",
              type: "text",
              version: 1,
              startTime: 106,
              endTime: 110,
              id: "textNode-28",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "ایسا کیوں ہے؟",
              type: "text",
              version: 1,
              startTime: 110,
              endTime: 112,
              id: "textNode-29",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "ہم نے جھوٹ نہیں کہا تھا۔ ",
              type: "text",
              version: 1,
              startTime: 112,
              endTime: 114,
              id: "textNode-30",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "قرآن کورس کی برکتیں اتریں گی۔",
              type: "text",
              version: 1,
              startTime: 114,
              endTime: 116,
              id: "textNode-31",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " آہستہ آہستہ۔ ",
              type: "text",
              version: 1,
              startTime: 116,
              endTime: 117,
              id: "textNode-32",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "لیکن کیا آپ نے سمجھ لیا ہے کہ آپ کہیں گے میں ایمان لایا اور آپ آزمائے نہیں جائیں گے؟",
              type: "text",
              version: 1,
              startTime: 117,
              endTime: 123,
              id: "textNode-33",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " ",
              type: "text",
              version: 1,
              id: "textNode-34",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "ہم نے اس کورس میں ٹیسٹ نہیں رکھا کیونکہ یہ کورس آپ سے دوسرے طریقوں سے ٹیسٹ خود ہی لے لے گا۔",
              type: "text",
              version: 1,
              startTime: 123,
              endTime: 129,
              id: "textNode-35",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "لیکن سب سے اہم بات جو یاد رکھنی ہے وہ یہ ہے کہ یہ جو مسئلے آپ کو پیش آ رہے ہیں ‘یہ قرآن کورس کی وجہ سے نہیں ہیں۔",
              type: "text",
              version: 1,
              startTime: 129,
              endTime: 135,
              id: "textNode-36",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Trebuchet MS;",
              text: " یہ آپ کی زندگی میں عین اسی وقت‘اسی جگہ لکھے تھے۔",
              type: "text",
              version: 1,
              startTime: 135,
              endTime: 138,
              id: "textNode-37",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " ",
              type: "text",
              version: 1,
              id: "textNode-38",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "مکتوب۔یہ آپ کو پیش آنے تھے۔",
              type: "text",
              version: 1,
              startTime: 138,
              endTime: 141,
              id: "textNode-39",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Trebuchet MS;",
              text: "بھلے آپ کورس کریں یا نہیں۔",
              type: "text",
              version: 1,
              startTime: 141,
              endTime: 144,
              id: "textNode-40",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: " کورس کرنے سے یہ آسان نہیں ہوجائیں گے لیکن آپ کو یہ معلوم ہوجائے گا کہ ان پہ میں نے کیا ردِعمل دینا ہے۔",
              type: "text",
              version: 1,
              startTime: 144,
              endTime: 151,
              id: "textNode-41",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " کیسے چلنا ہے آگے۔کیا کرنا ہے کیا نہیں۔ ",
              type: "text",
              version: 1,
              startTime: 151,
              endTime: 155,
              id: "textNode-42",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "یہ ایسے ہے کہ آپ کی گاڑی ایک تنگ گلی میں پھنس جاتی ہے۔",
              type: "text",
              version: 1,
              startTime: 155,
              endTime: 159,
              id: "textNode-43",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " ",
              type: "text",
              version: 1,
              id: "textNode-44",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Trebuchet MS;",
              text: "گاڑی چلائیںگے تو گاڑی پھنسے گی تو سہی۔ لیکن ساتھ جب کوئی استاد بیٹھا ہو تو وہ بتادیتا ہے کہ یہاں سے نکلنا کیسے ہے۔",
              type: "text",
              version: 1,
              startTime: 159,
              endTime: 169,
              id: "textNode-45",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " ",
              type: "text",
              version: 1,
              id: "textNode-46",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "ایسے موڑو۔",
              type: "text",
              version: 1,
              startTime: 169,
              endTime: 170,
              id: "textNode-47",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " تھوڑا پیچھے کرو۔",
              type: "text",
              version: 1,
              startTime: 170,
              endTime: 171,
              id: "textNode-48",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "استاد کی موجودگی کا یہ مطلب نہیں کہ آپ پھنسے گے ہی نہیں۔ نہ ہی یہ کہ استاد میرے ساتھ بیٹھا تھا اس لیے گاڑی پھنسی ہے۔",
              type: "text",
              version: 1,
              startTime: 171,
              endTime: 178,
              id: "textNode-49",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " ",
              type: "text",
              version: 1,
              id: "textNode-50",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "نہیں۔ گاڑی آپ چلا رہے ہیں۔ یہ آپ کی زندگی ہے۔",
              type: "text",
              version: 1,
              startTime: 178,
              endTime: 182,
              id: "textNode-51",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "راستہ آپ نے چنا ہے۔ ",
              type: "text",
              version: 1,
              startTime: 182,
              endTime: 184,
              id: "textNode-52",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "استاد صرف نکلنے کا راستہ بتائے گا۔اور بس۔",
              type: "text",
              version: 1,
              startTime: 182,
              endTime: 190,
              id: "textNode-53",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "یقیناََ گزشتہ ایک ہفتے میں آپ کے ساتھ بہت سے معاملات پیش آئے ہوں گے۔ ",
              type: "text",
              version: 1,
              startTime: 190,
              endTime: 194,
              id: "textNode-54",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "کہیں آپ سے اللہ کے حکم کی خلاف ورزی بھی ہوئی ہوگی۔",
              type: "text",
              version: 1,
              startTime: 194,
              endTime: 198,
              id: "textNode-55",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "کہیں آپ نے غصہ دکھادیا ہوگا۔ ",
              type: "text",
              version: 1,
              startTime: 198,
              endTime: 200,
              id: "textNode-56",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "کہیں آپ نے کچھ ایسا کیا ہوگا جس پہ آپ شرمندہ ہوں گے۔ ",
              type: "text",
              version: 1,
              startTime: 200,
              endTime: 204,
              id: "textNode-57",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "اور کسی عمل سے آپ کو لگا ہوگا کہ اتنا قرآن پڑھنے اور کورس میں شمولیت کے باوجود بھی ہم فیل ہوگئے۔ ",
              type: "text",
              version: 1,
              startTime: 204,
              endTime: 213,
              id: "textNode-58",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "کیا فائدہ ہوا؟ پھر وہی گناہ کرڈالا۔",
              type: "text",
              version: 1,
              startTime: 213,
              endTime: 216,
              id: "textNode-59",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: " پھر اپنے ہاتھ گندے کردیے۔ ",
              type: "text",
              version: 1,
              startTime: 216,
              endTime: 218,
              id: "textNode-60",
            },
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "font-family: Verdana;",
              text: "پھر زبان میلی کردی۔ کیا فائدہ؟",
              type: "text",
              version: 1,
              startTime: 218,
              endTime: 222,
              id: "textNode-61",
            },
          ],
          direction: "rtl",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
      ],
      direction: "rtl",
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  },
};
const initialState = {
  step: 0,
  data: defaultData,
  setStep: (step: number) => 0 as any,
  onUploadAudioSuccessful: (url: string) => 0 as any,
  onTextFormattingComplete: (editorState: any) => 0 as any,
  handleAddTimeToTextNode: (id: string, startTime: number, endTime: number) =>
    0 as any,
};

const Context = createContext(initialState);
export const useSyncAudioSteps = () => useContext(Context);

const SyncAudioStepsProvider = ({ children }: Props) => {
  const [step, setStep] = React.useState(initialState.step);
  const [data, setData] = React.useState(initialState.data);

  const onUploadAudioSuccessful = (url: string) => {
    setStep(2);
    setData({ ...data, audio: url });
  };

  const onTextFormattingComplete = (editorState: any) => {
    setStep(3);
    setData({ ...data, editorState: assignUniqueIdsToTextNodes(editorState) });
  };

  const handleAddTimeToTextNode = (
    id: string,
    startTime: number,
    endTime: number
  ) => {
    setData(
      (prev) =>
        ({
          ...prev,
          editorState: addTimeToTextNode(
            prev.editorState,
            id,
            startTime,
            endTime
          ),
        } as any)
    );
  };

  const values = {
    step,
    setStep,
    data,
    onUploadAudioSuccessful,
    onTextFormattingComplete,
    handleAddTimeToTextNode,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default SyncAudioStepsProvider;
