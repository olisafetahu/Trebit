export type HardwareCategory = "pos-systems" | "barcode-scanners" | "label-printers" | "thermal-printers" | "pda" | "tablets"

export type HardwareProduct = {
  id: string
  name: string
  description: string
  image?: string
}

export type HardwareCategoryData = {
  id: HardwareCategory
  title: string
  products: HardwareProduct[]
}

export const hardwareCategories: HardwareCategoryData[] = [
  {
    id: "pos-systems",
    title: "POS Systems",
    products: [
      {
        id: "ocom-aio-pos-1566",
        name: "OCOM AIO POS 1566",
        description: "Kompjuter All-in-One, ekran me prekje 15.6\", procesor i5 (gjen. 8), 8GB RAM, 128GB SSD - ekran i vetëm.",
        image: "/ocom1566.png"
      },
      {
        id: "ipos-aio-pos-extension",
        name: "iPOS AIO POS — Extension",
        description: "AIO 15.6\" me ekran shtesë 2.5\" HD për klientin, dizajn kompakt dhe i palosshëm.",
        image: "/IPOSAIOPOS.png"
      },
      {
        id: "ipos-aio-i3-gen10",
        name: "iPOS AIO — i3 Gen10",
        description: "Kompjuter All-in-One, procesor i3 (gjen. 10), 8GB RAM, 128GB SSD.",
        image: "/iposx100.png"
      }
    ]
  },
  {
    id: "barcode-scanners",
    title: "Barcode Scanners",
    products: [
      {
        id: "sunlux-xl-rd10",
        name: "Sunlux XL-RD10 Barcode Scanner USB 2D",
        description: "Skaner barkodi USB, teknologji 2D, lidhje plug-and-play, i aftë të lexojë barkode nga letra dhe ekrane dixhitale.",
        image: "/sunlux-xl-rd10.png"
      },
      {
        id: "honeywell-hf-600",
        name: "Honeywell HF-600",
        description: "Skaner prezantimi 2D ekonomik me dritare të gjerë skanimi, ideal për farmaci, logjistikë dhe pika shitjeje.",
        image: "/honeywell-hf-600.png"
      }
    ]
  },
  {
    id: "label-printers",
    title: "Label Printers",
    products: [
      {
        id: "rongta-pr410",
        name: "Rongta PR410",
        description: "Printer etiketash i bardhë, i kompakt dhe i besueshëm për printim të etiketave.",
        image: "/rongta-pr410.png"
      },
      {
        id: "godex-g500",
        name: "Godex G500",
        description: "Printer etiketash gri, performancë e lartë për vëllime të mëdha printimi.",
        image: "/godex-g500.png"
      },
      {
        id: "bixolon-xd3",
        name: "Bixolon XD3",
        description: "Printer etiketash i zi, dizajn modern dhe i qëndrueshëm për përdorim industrial.",
        image: "/bixolon-xd3.png"
      }
    ]
  },
  {
    id: "thermal-printers",
    title: "Thermal Printers",
    products: [
      {
        id: "ocom-ocpp-80h",
        name: "OCOM OCPP-80H",
        description: "Printer termik faturash 80mm, ekonomik dhe i besueshëm, prerës automatik, 3 ndërfaqe (USB, Serial, LAN).",
        image: "/ocom-ocpp-80h.png"
      },
      {
        id: "tyso-prp-250cl",
        name: "TYSSO PRP-250CL",
        description: "Printer termik faturash i besueshëm, shpejtësi 250mm/s, prerës automatik, ndërfaqe të shumëfishta (USB, Serial, Ethernet).",
        image: "/tyso-prp-250cl.png"
      }
    ]
  },
  {
    id: "pda",
    title: "PDA / Mobile Computers",
    products: [
      {
        id: "urovo-ct48",
        name: "Urovo CT48",
        description: "2.0GHz, 2D, 4\" screen, A12, 4/64GB, WiFi, 4G, 5000mAh battery, cable, PSU (EU), HS.",
        image: "/urovo-ct48.png"
      },
      {
        id: "urovo-dt630",
        name: "Urovo DT630",
        description: "2.5GHz, 2D, 6.58\" screen, A15 (GMS/AER), 50MP camera, 8/128GB, WiFi6e, BT/5G, NFC, 4500mAh battery, cable, PSU.",
        image: "/urovo-dt630.png"
      }
    ]
  },
  {
    id: "tablets",
    title: "Tablets",
    products: [
      {
        id: "p8100p",
        name: "P8100P",
        description: "2D, 10\", a13, 4/64, WiFi, 4G, 10000mAH, cable, PSU(EU), X strap.",
        image: "/p8100p.png"
      }
    ]
  }
]
