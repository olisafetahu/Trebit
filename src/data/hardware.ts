export type HardwareCategory = "pos-systems" | "barcode-scanners" | "label-printers" | "thermal-printers" | "pda" | "tablets"

export type HardwareProduct = {
  id: string
  name: string
  description: string
  image?: string
  // Facts taken from the manufacturer's (or official distributor's) product page
  specs?: { label: string; value: string }[]
  sourceUrl?: string
  sourceKind?: "manufacturer" | "distributor"
  // Source photo is cut at the bottom edge, so the card sits it flush against the frame
  cropBottom?: boolean
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
        image: "/ocom1566.png",
        specs: [
          { label: "Form factor", value: "All-in-One POS computer" },
          { label: "Display", value: "15.6\" touchscreen" },
          { label: "Customer display", value: "—" },
          { label: "Processor", value: "Intel Core i5, 8th generation" },
          { label: "Memory", value: "8GB RAM" },
          { label: "Storage", value: "128GB SSD" },
        ]
      },
      {
        id: "ipos-aio-pos-extension",
        name: "iPOS AIO POS — Extension",
        description: "AIO 15.6\" me ekran shtesë 2.5\" HD për klientin, dizajn kompakt dhe i palosshëm.",
        image: "/IPOSAIOPOS.png",
        specs: [
          { label: "Form factor", value: "All-in-One POS computer, compact and foldable design" },
          { label: "Display", value: "15.6\"" },
          { label: "Customer display", value: "2.5\" HD additional screen" },
          { label: "Processor", value: "—" },
          { label: "Memory", value: "—" },
          { label: "Storage", value: "—" },
        ]
      },
      {
        id: "ipos-aio-i3-gen10",
        name: "iPOS AIO — i3 Gen10",
        description: "Kompjuter All-in-One, procesor i3 (gjen. 10), 8GB RAM, 128GB SSD.",
        image: "/iposx100.png",
        specs: [
          { label: "Form factor", value: "All-in-One POS computer" },
          { label: "Display", value: "—" },
          { label: "Customer display", value: "—" },
          { label: "Processor", value: "Intel Core i3, 10th generation" },
          { label: "Memory", value: "8GB RAM" },
          { label: "Storage", value: "128GB SSD" },
        ]
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
        image: "/sunlux-xl-rd10.png",
        sourceUrl: "https://www.ryans.com/sunlux-rd10-2d-wired-desktop-barcode-scanner",
        sourceKind: "distributor",
        specs: [
          { label: "Scan engine", value: "2D imager, 640 x 480 pixels, 60 fps" },
          { label: "Codes", value: "1D and 2D, from paper and phone screens" },
          { label: "Interface", value: "USB-HID, USB-VCP, RS-232" },
          { label: "Design", value: "Desktop scanner" },
          { label: "Scan range", value: "Depth of field 0-170 mm" },
        ]
      },
      {
        id: "honeywell-hf-600",
        name: "Honeywell HF-600",
        description: "Skaner prezantimi 2D ekonomik me dritare të gjerë skanimi, ideal për farmaci, logjistikë dhe pika shitjeje.",
        image: "/honeywell-hf-600.png",
        sourceUrl: "https://www.posnet.com.pl/en/produkty/product/145/hf600-youjie",
        sourceKind: "distributor",
        specs: [
          { label: "Scan engine", value: "Area imager" },
          { label: "Codes", value: "1D, PDF417, 2D (Data Matrix, QR)" },
          { label: "Interface", value: "USB, RS-232, keyboard wedge" },
          { label: "Design", value: "Fixed base with 3-position adjustable head" },
          { label: "Scan range", value: "80 mm diameter scan window" },
        ]
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
        image: "/rongta-pr410.png",
        sourceUrl: "https://www.rongtatech.com/rp410-4inch-label-barcode-printer-bluetooth-usb_p34.html",
        sourceKind: "manufacturer",
        specs: [
          { label: "Print method", value: "Thermal" },
          { label: "Resolution", value: "203 dpi" },
          { label: "Print speed", value: "Up to 150 mm/s (6 ips)" },
          { label: "Print width", value: "Up to 108 mm" },
          { label: "Media types", value: "Labels, black mark, continuous, fanfold" },
          { label: "Max roll diameter", value: "130 mm" },
          { label: "Command languages", value: "TSPL+ESC, ZPL+ESC" },
        ]
      },
      {
        id: "godex-g500",
        name: "Godex G500",
        description: "Printer etiketash gri, performancë e lartë për vëllime të mëdha printimi.",
        image: "/godex-g500.png",
        sourceUrl: "https://ricelake.com/products/godex-g500-direct-thermal-label-printer",
        sourceKind: "distributor",
        specs: [
          { label: "Print method", value: "Direct thermal / thermal transfer" },
          { label: "Resolution", value: "203 dpi" },
          { label: "Print speed", value: "Up to 127 mm/s (5 ips)" },
          { label: "Print width", value: "Up to 108 mm" },
          { label: "Media types", value: "Continuous, gap, black mark, punched" },
          { label: "Max roll diameter", value: "127 mm (5 in)" },
          { label: "Command languages", value: "EZPL, GEPL, GZPL" },
        ]
      },
      {
        id: "bixolon-xd3",
        name: "Bixolon XD3",
        description: "Printer etiketash i zi, dizajn modern dhe i qëndrueshëm për përdorim industrial.",
        image: "/bixolon-xd3.png",
        sourceUrl: "https://www.bixolon.com/product_view.php?idx=193",
        sourceKind: "manufacturer",
        specs: [
          { label: "Print method", value: "XD3-40d direct thermal; XD3-40t thermal transfer + direct thermal" },
          { label: "Resolution", value: "203 dpi" },
          { label: "Print speed", value: "Up to 127 mm/s (5 ips)" },
          { label: "Print width", value: "Up to 104 mm" },
          { label: "Media types", value: "Gap, black mark, notch, continuous, fanfold" },
          { label: "Max roll diameter", value: "127 mm" },
          { label: "Command languages", value: "EPL, ZPL II, SLCS, BPL-Z, BPL-E" },
        ]
      }
    ]
  },
  {
    id: "thermal-printers",
    title: "Thermal Printers",
    products: [
      {
        id: "tyso-prp-250cl",
        name: "TYSSO PRP-250CL",
        description: "Printer termik faturash i besueshëm, shpejtësi 250mm/s, prerës automatik, ndërfaqe të shumëfishta (USB, Serial, Ethernet).",
        image: "/tyso-prp-250cl.png",
        sourceUrl: "https://www.tysso.com.tw/en/product/80mm-multi-i_o-print-speed-thermal-receipt-printer_PRP-250C.html",
        sourceKind: "manufacturer",
        specs: [
          { label: "Print method", value: "Thermal line" },
          { label: "Print width", value: "72 mm" },
          { label: "Paper width", value: "79.5 mm" },
          { label: "Max roll diameter", value: "83 mm" },
          { label: "Cutter", value: "Partial auto cutter" },
          { label: "Command set", value: "ESC/POS" },
          { label: "Print head life", value: "100 km" },
        ]
      },
      {
        id: "ocom-ocpp-80h",
        name: "OCOM OCPP-80H",
        description: "Printer termik faturash 80mm, ekonomik dhe i besueshëm, prerës automatik, 3 ndërfaqe (USB, Serial, LAN).",
        image: "/ocom-ocpp-80h.png",
        sourceUrl: "https://www.ocominc.com/products/OCPP-80H-80MM-Thermal-Receipt-Printer-with-Auto-Cutter.html",
        sourceKind: "manufacturer",
        specs: [
          { label: "Print method", value: "Direct thermal line" },
          { label: "Print width", value: "72 mm" },
          { label: "Paper width", value: "79.5 mm" },
          { label: "Max roll diameter", value: "80 mm" },
          { label: "Cutter", value: "Partial auto cutter, 1.5 million cuts" },
          { label: "Command set", value: "ESC/POS compatible" },
          { label: "Print head life", value: "100 km" },
        ]
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
        image: "/urovo-ct48.png",
        sourceUrl: "https://en.urovo.com/products/mobile/CT48.html",
        sourceKind: "manufacturer",
        specs: [
          { label: "Operating system", value: "Android 12" },
          { label: "Processor", value: "Octa-core 2.0 GHz" },
          { label: "Display", value: "4.0 in, 480 x 800 touchscreen" },
          { label: "Memory / storage", value: "Varies by version, up to 4 GB RAM / 64 GB" },
          { label: "Scan engine", value: "2D imager (1D, 2D, DPM)" },
          { label: "Cameras", value: "13 MP rear" },
          { label: "Battery", value: "5000 mAh, removable" },
          { label: "IP rating", value: "IP65" },
          { label: "Drop resistance", value: "1.5 m" },
        ]
      },
      {
        id: "urovo-dt630",
        name: "Urovo DT630",
        description: "2.5GHz, 2D, 6.58\" screen, A15 (GMS/AER), 50MP camera, 8/128GB, WiFi6e, BT/5G, NFC, 4500mAh battery, cable, PSU.",
        image: "/urovo-dt630.png",
        sourceUrl: "https://en.urovo.com/products/mobile/DT630.html",
        sourceKind: "manufacturer",
        specs: [
          { label: "Operating system", value: "Android 15" },
          { label: "Processor", value: "Octa-core 2.5 GHz" },
          { label: "Display", value: "6.6 in, 1080 x 2408" },
          { label: "Memory / storage", value: "8 GB RAM / 128 GB ROM" },
          { label: "Scan engine", value: "Rear-mounted, 1D/2D, reads on-screen codes" },
          { label: "Cameras", value: "50 MP rear (PDAF, flash), 8 MP front" },
          { label: "Battery", value: "3.85 V, 4500 mAh" },
          { label: "IP rating", value: "IP68" },
          { label: "Drop resistance", value: "1.5 m" },
        ]
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
        image: "/p8100p.png",
        cropBottom: true,
        sourceUrl: "https://en.urovo.com/products/tablets/p8100.html",
        sourceKind: "manufacturer",
        specs: [
          { label: "Operating system", value: "Android 13" },
          { label: "Processor", value: "Octa-core, 2.2GHz" },
          { label: "Display", value: "10.1\" multi-touch, 1920x1200" },
          { label: "Memory / storage", value: "4GB RAM / 64GB ROM" },
          { label: "Scan engine", value: "1D/2D barcode reader" },
          { label: "Cameras", value: "13 MP rear (PDAF, flashlight), 5 MP front" },
          { label: "Battery", value: "3.8V, 10000mAh" },
          { label: "IP rating", value: "IP67" },
          { label: "Drop resistance", value: "1.2 m" },
        ]
      }
    ]
  }
]
