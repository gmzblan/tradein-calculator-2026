"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const pricingDatabase: Record<string, Record<string, Record<string, { high: number; low: number }>>> = {
  "iPhone 12": {
    "64GB": { high: 200, low: 180 },
    "128GB": { high: 240, low: 220 },
    "256GB": { high: 280, low: 260 },
  },
  "iPhone 12 Pro": {
    "128GB": { high: 260, low: 250 },
    "256GB": { high: 280, low: 260 },
    "512GB": { high: 320, low: 300 },
  },
  "iPhone 12 Pro Max": {
    "128GB": { high: 250, low: 240 },
    "256GB": { high: 300, low: 280 },
    "512GB": { high: 340, low: 320 },
  },
  "iPhone 13": {
    "128GB": { high: 340, low: 320 },
    "256GB": { high: 360, low: 330 },
    "512GB": { high: 380, low: 340 },
  },
  "iPhone 13 Pro": {
    "128GB": { high: 360, low: 330 },
    "256GB": { high: 390, low: 380 },
    "512GB": { high: 420, low: 400 },
    "1TB": { high: 450, low: 430 },
  },
  "iPhone 13 Pro Max": {
    "128GB": { high: 460, low: 440 },
    "256GB": { high: 480, low: 460 },
    "512GB": { high: 520, low: 500 },
    "1TB": { high: 540, low: 520 },
  },
  "iPhone 14": {
    "128GB": { high: 360, low: 340 },
    "256GB": { high: 380, low: 360 },
    "512GB": { high: 400, low: 380 },
  },
  "iPhone 14 Plus": {
    "128GB": { high: 380, low: 360 },
    "256GB": { high: 400, low: 390 },
    "512GB": { high: 420, low: 400 },
  },
  "iPhone 14 Pro": {
    "128GB": { high: 450, low: 430 },
    "256GB": { high: 480, low: 460 },
    "512GB": { high: 520, low: 500 },
    "1TB": { high: 530, low: 520 },
  },
  "iPhone 14 Pro Max": {
    "128GB": { high: 560, low: 540 },
    "256GB": { high: 600, low: 580 },
    "512GB": { high: 600, low: 580 },
    "1TB": { high: 640, low: 620 },
  },
  "iPhone 15": {
    "128GB": { high: 480, low: 460 },
    "256GB": { high: 500, low: 480 },
    "512GB": { high: 540, low: 530 },
  },
  "iPhone 15 Plus": {
    "128GB": { high: 500, low: 480 },
    "256GB": { high: 520, low: 500 },
    "512GB": { high: 540, low: 520 },
    "1TB": { high: 560, low: 540 },
  },
  "iPhone 15 Pro": {
    "128GB": { high: 560, low: 530 },
    "256GB": { high: 600, low: 580 },
    "512GB": { high: 620, low: 600 },
    "1TB": { high: 650, low: 630 },
  },
  "iPhone 15 Pro Max": {
    "256GB": { high: 720, low: 700 },
    "512GB": { high: 750, low: 730 },
    "1TB": { high: 790, low: 780 },
  },
  "iPhone 16": {
    "128GB": { high: 600, low: 580 },
    "256GB": { high: 620, low: 600 },
    "512GB": { high: 640, low: 620 },
  },
  "iPhone 16 Plus": {
    "128GB": { high: 620, low: 600 },
    "256GB": { high: 640, low: 620 },
    "512GB": { high: 660, low: 640 },
    "1TB": { high: 680, low: 660 },
  },
  "iPhone 16 Pro": {
    "256GB": { high: 740, low: 720 },
    "512GB": { high: 780, low: 740 },
    "1TB": { high: 800, low: 780 },
  },
  "iPhone 16 Pro Max": {
    "256GB": { high: 870, low: 850 },
    "512GB": { high: 880, low: 860 },
    "1TB": { high: 900, low: 890 },
  },
  "iPhone 17": {
    "128GB": { high: 700, low: 680 },
    "256GB": { high: 720, low: 700 },
    "512GB": { high: 750, low: 730 },
  },
  "iPhone 17 Air": {
    "256GB": { high: 780, low: 760 },
    "512GB": { high: 820, low: 800 },
    "1TB": { high: 860, low: 840 },
  },
  "iPhone 17 Pro": {
    "256GB": { high: 900, low: 880 },
    "512GB": { high: 950, low: 930 },
    "1TB": { high: 1000, low: 980 },
  },
  "iPhone 17 Pro Max": {
    "256GB": { high: 1050, low: 1030 },
    "512GB": { high: 1100, low: 1080 },
    "1TB": { high: 1150, low: 1130 },
  },
}

const iPhoneData = {
  "12": [
    { model: "iPhone 12", capacities: ["64GB", "128GB", "256GB"] },
    { model: "iPhone 12 Pro", capacities: ["128GB", "256GB", "512GB"] },
    { model: "iPhone 12 Pro Max", capacities: ["128GB", "256GB", "512GB"] },
  ],
  "13": [
    { model: "iPhone 13", capacities: ["128GB", "256GB", "512GB"] },
    { model: "iPhone 13 Pro", capacities: ["128GB", "256GB", "512GB", "1TB"] },
    { model: "iPhone 13 Pro Max", capacities: ["128GB", "256GB", "512GB", "1TB"] },
  ],
  "14": [
    { model: "iPhone 14", capacities: ["128GB", "256GB", "512GB"] },
    { model: "iPhone 14 Plus", capacities: ["128GB", "256GB", "512GB"] },
    { model: "iPhone 14 Pro", capacities: ["128GB", "256GB", "512GB", "1TB"] },
    { model: "iPhone 14 Pro Max", capacities: ["128GB", "256GB", "512GB", "1TB"] },
  ],
  "15": [
    { model: "iPhone 15", capacities: ["128GB", "256GB", "512GB"] },
    { model: "iPhone 15 Plus", capacities: ["128GB", "256GB", "512GB", "1TB"] },
    { model: "iPhone 15 Pro", capacities: ["128GB", "256GB", "512GB", "1TB"] },
    { model: "iPhone 15 Pro Max", capacities: ["256GB", "512GB", "1TB"] },
  ],
  "16": [
    { model: "iPhone 16", capacities: ["128GB", "256GB", "512GB"] },
    { model: "iPhone 16 Plus", capacities: ["128GB", "256GB", "512GB", "1TB"] },
    { model: "iPhone 16 Pro", capacities: ["256GB", "512GB", "1TB"] },
    { model: "iPhone 16 Pro Max", capacities: ["256GB", "512GB", "1TB"] },
  ],
  "17": [
    { model: "iPhone 17", capacities: ["128GB", "256GB", "512GB"] },
    { model: "iPhone 17 Air", capacities: ["256GB", "512GB", "1TB"] },
    { model: "iPhone 17 Pro", capacities: ["256GB", "512GB", "1TB"] },
    { model: "iPhone 17 Pro Max", capacities: ["256GB", "512GB", "1TB"] },
  ],
}

const conditionOptions = [
  { label: "Grado A", description: "Como nuevo", discount: 0 },
  { label: "Grado B", description: "Detalles de uso", discount: 0.15 },
  { label: "Grado C", description: "Pantalla/Tapa rota o reparaciones previas", manual: true },
]

export default function TradeInCalculator() {
  const [step, setStep] = useState(1)
  const [selectedSeries, setSelectedSeries] = useState<string>("")
  const [selectedModel, setSelectedModel] = useState<any>(null)
  const [selectedCapacity, setSelectedCapacity] = useState<string>("")
  const [hasBox, setHasBox] = useState<boolean | null>(null)
  const [batteryPercentage, setBatteryPercentage] = useState<number>(90)
  const [batteryCycles, setBatteryCycles] = useState<number>(0)
  const [selectedCondition, setSelectedCondition] = useState<any>(null)
  const [tradeOption, setTradeOption] = useState<string>("")

  const getBatteryColor = (percentage: number) => {
    if (percentage >= 81) return "#34c759"
    if (percentage >= 60) return "#ff9500"
    return "#ff3b30"
  }

  const calculatePrice = () => {
    if (!selectedModel || !selectedCapacity || batteryPercentage === null || !selectedCondition) return 0

    if (selectedCondition.manual) return 0

    const modelPricing = pricingDatabase[selectedModel.model]
    if (!modelPricing || !modelPricing[selectedCapacity]) return 0

    const { high, low } = modelPricing[selectedCapacity]

    // Select price based on battery percentage
    let price = batteryPercentage >= 81 ? high : low

    // Apply Grade B discount if applicable (Grado A has 0 discount, Grado C is manual)
    if (selectedCondition.discount > 0) {
      price = price * (1 - selectedCondition.discount)
    }

    // Add $20 bonus if user has the original box
    if (hasBox === true) {
      price = price + 20
    }

    return Math.round(price)
  }

  const handleWhatsAppClick = () => {
    const price = calculatePrice()

    const shouldShowCycles = selectedSeries && ["15", "16", "17"].includes(selectedSeries)

    const tradeOptionText = tradeOption === "sell" ? "Vender mi equipo" : "Cambio por equipo nuevo"

    const message = selectedCondition?.manual
      ? `Hola Equipo de PuntoCell, me gustaría entregar mi equipo como parte de pago. Aquí los detalles:\n\n• *Equipo:* ${selectedModel.model} de ${selectedCapacity}\n• *Batería:* ${batteryPercentage}%\n• *Condición:* ${selectedCondition.label} (${selectedCondition.description})\n• *Opción:* ${tradeOptionText}\n• *Precio estimado:* Cotización sujeta a revisión técnica manual\n\n¿Cómo es el proceso para la revisión física?`
      : `Hola Equipo de PuntoCell, me gustaría entregar mi equipo como parte de pago. Aquí los detalles:\n\n• *Equipo:* ${selectedModel.model} de ${selectedCapacity}\n• *Caja original:* ${hasBox ? "Sí (+$20)" : "No"}\n• *Batería:* ${batteryPercentage}%${shouldShowCycles ? `\n• *Ciclos de batería:* ${batteryCycles}` : ""}\n• *Condición:* ${selectedCondition.label}\n• *Opción:* ${tradeOptionText}\n• *Precio estimado:* $${price}\n\n¿Cómo es el proceso para la revisión física?`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/584140486826?text=${encodedMessage}`, "_blank")
  }

  const resetCalculator = () => {
    setStep(1)
    setSelectedSeries("")
    setSelectedModel(null)
    setSelectedCapacity("")
    setHasBox(null)
    setBatteryPercentage(90)
    setBatteryCycles(0)
    setSelectedCondition(null)
    setTradeOption("")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-6">
          {/* Centered logo on mobile */}
          <div className="flex items-center justify-center gap-3">
            <img src="/puntocell-logo.png" alt="PuntoCell Valencia Logo" className="h-16 w-auto object-contain" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Progress Indicator */}
        <div className="mb-12 flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div
              key={num}
              className={`h-2 w-16 rounded-full transition-all duration-300 ${
                num <= step ? "bg-[#0071e3]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Series Selection */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="mb-8 text-center text-3xl font-semibold text-[#1D1D1F]">¿Qué iPhone tienes?</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.keys(iPhoneData).map((series) => (
                <Card
                  key={series}
                  onClick={() => {
                    setSelectedSeries(series)
                    setStep(2)
                  }}
                  className="cursor-pointer rounded-[18px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="mb-4 flex justify-center">
                    <img
                      src={`/iphone-${series}.jpg`}
                      alt={`iPhone ${series}`}
                      className="h-[120px] w-auto object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Serie</p>
                    <p className="mt-2 text-4xl font-semibold text-[#1D1D1F]">{series}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Model and Capacity Selection */}
        {step === 2 && (
          <div className="animate-fade-in">
            <button onClick={() => setStep(1)} className="mb-6 text-[#0071e3] transition-opacity hover:opacity-70">
              ← Volver
            </button>
            <h2 className="mb-8 text-center text-3xl font-semibold text-[#1D1D1F]">Elige tu modelo</h2>
            <div className="space-y-6">
              {iPhoneData[selectedSeries as keyof typeof iPhoneData]?.map((phone) => (
                <Card key={phone.model} className="rounded-[18px] border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-[#1D1D1F]">{phone.model}</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {phone.capacities.map((capacity) => (
                      <button
                        key={capacity}
                        onClick={() => {
                          setSelectedModel(phone)
                          setSelectedCapacity(capacity)
                          setStep(3)
                        }}
                        className="rounded-xl border-2 border-gray-200 bg-white px-6 py-4 text-center font-medium text-[#1D1D1F] transition-all duration-200 hover:border-[#0071e3] hover:shadow-md"
                      >
                        {capacity}
                      </button>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Box Availability */}
        {step === 3 && (
          <div className="animate-fade-in">
            <button onClick={() => setStep(2)} className="mb-6 text-[#0071e3] transition-opacity hover:opacity-70">
              ← Volver
            </button>
            <h2 className="mb-4 text-center text-3xl font-semibold text-[#1D1D1F]">¿Posees la caja original?</h2>
            <p className="mb-8 text-center text-gray-600">
              {selectedModel?.model} de {selectedCapacity}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 max-w-xl mx-auto">
              <Card
                onClick={() => {
                  setHasBox(true)
                  setStep(4)
                }}
                className="cursor-pointer rounded-[18px] border-2 border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-[#0071e3] hover:shadow-lg"
              >
                <p className="text-center text-2xl font-semibold text-[#1D1D1F]">Si</p>
                <p className="mt-2 text-center text-sm text-green-600 font-medium">+$20 al valor final</p>
              </Card>
              <Card
                onClick={() => {
                  setHasBox(false)
                  setStep(4)
                }}
                className="cursor-pointer rounded-[18px] border-2 border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-[#0071e3] hover:shadow-lg"
              >
                <p className="text-center text-2xl font-semibold text-[#1D1D1F]">No</p>
                <p className="mt-2 text-center text-sm text-gray-500">Sin bonificación</p>
              </Card>
            </div>
          </div>
        )}

        {/* Step 4: Battery Selection */}
        {step === 4 && (
          <div className="animate-fade-in">
            <button onClick={() => setStep(3)} className="mb-6 text-[#0071e3] transition-opacity hover:opacity-70">
              ← Volver
            </button>
            <h2 className="mb-4 text-center text-3xl font-semibold text-[#1D1D1F]">
              ¿Cuál es el estado de la batería?
            </h2>
            <p className="mb-12 text-center text-gray-600">
              {selectedModel?.model} de {selectedCapacity}
            </p>

            <Card className="mx-auto max-w-2xl rounded-[24px] border border-gray-200 bg-white p-12 shadow-lg">
              {/* Battery Icon and Percentage Display */}
              <div className="mb-12 flex items-center justify-center gap-6">
                {/* Battery Icon */}
                <div className="relative flex items-center">
                  {/* Battery body */}
                  <div className="relative h-20 w-36 rounded-lg border-4 border-gray-300">
                    {/* Battery fill */}
                    <div
                      className="absolute bottom-0 left-0 top-0 rounded-md transition-all duration-300 ease-out"
                      style={{
                        width: `${batteryPercentage}%`,
                        backgroundColor: getBatteryColor(batteryPercentage),
                      }}
                    />
                  </div>
                  {/* Battery terminal */}
                  <div className="h-10 w-2 rounded-r" style={{ backgroundColor: getBatteryColor(batteryPercentage) }} />
                </div>

                {/* Percentage Display */}
                <div className="text-center">
                  <div
                    className="text-7xl font-bold transition-colors duration-300"
                    style={{ color: getBatteryColor(batteryPercentage) }}
                  >
                    {batteryPercentage}%
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-500">
                    {batteryPercentage >= 81
                      ? "Excelente estado"
                      : batteryPercentage >= 60
                        ? "Estado regular"
                        : "Requiere servicio"}
                  </div>
                </div>
              </div>

              {/* Slider */}
              <div className="mb-8">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={batteryPercentage}
                  onChange={(e) => setBatteryPercentage(Number(e.target.value))}
                  className="battery-slider w-full"
                  style={{
                    accentColor: getBatteryColor(batteryPercentage),
                  }}
                />
                <div className="mt-4 flex justify-between text-sm font-medium text-gray-400">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Info Cards */}
              <div className="mb-8 space-y-3 rounded-xl bg-gray-50 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">Precio aplicable:</span>
                  <span className="font-semibold text-[#1D1D1F]">
                    {batteryPercentage >= 81 ? "Batería +80%" : "Batería -80%"}
                  </span>
                </div>
                {batteryPercentage < 60 && (
                  <p className="text-sm text-gray-600">
                    * Baterías con salud menor al 60% pueden requerir una revisión más detallada
                  </p>
                )}
              </div>

              {/* Continue Button */}
              <Button
                onClick={() => {
                  const needsCyclesStep = ["15", "16", "17"].includes(selectedSeries)
                  setStep(needsCyclesStep ? 5 : 6)
                }}
                className="w-full rounded-full bg-[#0071e3] py-6 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#0077ed] hover:shadow-lg"
              >
                Continuar
              </Button>
            </Card>
          </div>
        )}

        {step === 5 && ["15", "16", "17"].includes(selectedSeries) && (
          <div className="animate-fade-in">
            <button onClick={() => setStep(4)} className="mb-6 text-[#0071e3] transition-opacity hover:opacity-70">
              ← Volver
            </button>
            <h2 className="mb-4 text-center text-3xl font-semibold text-[#1D1D1F]">
              ¿Cuántos ciclos tiene la batería?
            </h2>
            <p className="mb-12 text-center text-gray-600">
              {selectedModel?.model} de {selectedCapacity}
            </p>

            <Card className="mx-auto max-w-2xl rounded-[24px] border border-gray-200 bg-white p-12 shadow-lg">
              {/* Cycles Display */}
              <div className="mb-12 text-center">
                <div className="mb-6 text-8xl font-bold text-[#0071e3]">{batteryCycles}</div>
                <div className="text-sm font-medium text-gray-500">ciclos de batería</div>
              </div>

              {/* Number Input */}
              <div className="mb-8">
                <input
                  type="number"
                  min="0"
                  max="999"
                  value={batteryCycles}
                  onChange={(e) => {
                    const value = Math.min(999, Math.max(0, Number(e.target.value)))
                    setBatteryCycles(value)
                  }}
                  onFocus={(e) => {
                    if (batteryCycles === 0) {
                      e.target.select()
                    }
                  }}
                  className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 px-6 py-4 text-center text-2xl font-semibold text-[#1D1D1F] transition-all focus:border-[#0071e3] focus:outline-none focus:ring-4 focus:ring-[#0071e3]/20"
                  placeholder="0"
                />
                <p className="mt-4 text-center text-sm text-gray-500">Ingresa un valor entre 0 y 999</p>
              </div>

              {/* Info Card */}
              <div className="mb-8 space-y-3 rounded-xl bg-gray-50 p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-lg">ℹ️</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">¿Cómo encontrar los ciclos de batería?</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Ve a <strong>Ajustes → Batería → Estado de la batería</strong> y busca "Ciclos de carga"
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3">
                  <span className="text-sm font-medium text-gray-600">Estado estimado:</span>
                  <span className="text-sm font-semibold text-[#1D1D1F]">
                    {batteryCycles < 300
                      ? "Excelente"
                      : batteryCycles < 500
                        ? "Bueno"
                        : batteryCycles < 700
                          ? "Regular"
                          : "Desgastado"}
                  </span>
                </div>
              </div>

              {/* Continue Button */}
              <Button
                onClick={() => setStep(6)}
                className="w-full rounded-full bg-[#0071e3] py-6 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#0077ed] hover:shadow-lg"
              >
                Continuar
              </Button>
            </Card>
          </div>
        )}

        {/* Step 6: Condition Selection & Final Summary */}
        {step === 6 && (
          <div className="animate-fade-in">
            <button
              onClick={() => setStep(["15", "16", "17"].includes(selectedSeries) ? 5 : 4)}
              className="mb-6 text-[#0071e3] transition-opacity hover:opacity-70"
            >
              ← Volver
            </button>
            <h2 className="mb-4 text-center text-3xl font-semibold text-[#1D1D1F]">Condición estética</h2>
            <p className="mb-8 text-center text-gray-600">
              {selectedModel?.model} de {selectedCapacity}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {conditionOptions.map((option) => (
                <Card
                  key={option.label}
                  onClick={() => setSelectedCondition(option)}
                  className={`cursor-pointer rounded-[18px] border-2 bg-white p-8 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
                    selectedCondition?.label === option.label
                      ? "border-[#0071e3] ring-2 ring-[#0071e3] ring-opacity-50"
                      : "border-gray-200 hover:border-[#0071e3]"
                  }`}
                >
                  <p className="text-center text-xl font-semibold text-[#1D1D1F]">{option.label}</p>
                  <p className="mt-2 text-center text-sm text-gray-600">{option.description}</p>
                  {option.discount > 0 && (
                    <p className="mt-2 text-center text-sm font-medium text-red-600">-{option.discount * 100}%</p>
                  )}
                  {option.manual && (
                    <p className="mt-2 text-center text-sm font-medium text-[#0071e3]">Cotización manual</p>
                  )}
                </Card>
              ))}
            </div>

            {/* Continue Button */}
            {selectedCondition && (
              <Button
                onClick={() => setStep(7)}
                className="mt-8 w-full rounded-full bg-[#0071e3] py-6 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#0077ed] hover:shadow-lg"
              >
                Continuar
              </Button>
            )}
          </div>
        )}

        {step === 7 && (
          <div className="animate-fade-in">
            <button onClick={() => setStep(6)} className="mb-6 text-[#0071e3] transition-opacity hover:opacity-70">
              ← Volver
            </button>
            <h2 className="mb-4 text-center text-3xl font-semibold text-[#1D1D1F]">¿Qué deseas hacer?</h2>
            <p className="mb-8 text-center text-gray-600">
              Selecciona si quieres vender tu equipo o hacer un cambio por uno nuevo
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card
                onClick={() => setTradeOption("sell")}
                className={`cursor-pointer rounded-[18px] border-2 bg-white p-8 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
                  tradeOption === "sell"
                    ? "border-[#0071e3] ring-2 ring-[#0071e3] ring-opacity-50"
                    : "border-gray-200 hover:border-[#0071e3]"
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <svg className="h-12 w-12 text-[#0071e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-center text-xl font-semibold text-[#1D1D1F]">Vender mi equipo</p>
                <p className="mt-2 text-center text-sm text-gray-600">Recibe el pago por tu iPhone actual</p>
              </Card>
              <Card
                onClick={() => setTradeOption("trade")}
                className={`cursor-pointer rounded-[18px] border-2 bg-white p-8 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
                  tradeOption === "trade"
                    ? "border-[#0071e3] ring-2 ring-[#0071e3] ring-opacity-50"
                    : "border-gray-200 hover:border-[#0071e3]"
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <svg className="h-12 w-12 text-[#0071e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <p className="text-center text-xl font-semibold text-[#1D1D1F]">Cambio por equipo nuevo</p>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Usa tu iPhone como parte de pago para uno nuevo
                </p>
              </Card>
            </div>

            {/* Continue Button */}
            {tradeOption && (
              <Button
                onClick={() => setStep(8)}
                className="mt-8 w-full rounded-full bg-[#0071e3] py-6 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#0077ed] hover:shadow-lg"
              >
                Continuar
              </Button>
            )}
          </div>
        )}

        {step === 8 && selectedCondition && (
          <div className="animate-fade-in">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-8 text-center text-3xl font-semibold text-[#1D1D1F]">Resumen de tu iPhone</h2>

              <Card className="mb-8 rounded-[18px] border border-gray-200 bg-white p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-600">Equipo:</span>
                    <span className="font-semibold text-[#1D1D1F]">
                      {selectedModel?.model} de {selectedCapacity}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-600">Caja original:</span>
                    <span className="font-semibold text-[#1D1D1F]">{hasBox ? "Sí (+$20)" : "No"}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-600">Batería:</span>
                    <span className="font-semibold" style={{ color: getBatteryColor(batteryPercentage) }}>
                      {batteryPercentage}%
                      {batteryPercentage >= 81
                        ? " (Excelente)"
                        : batteryPercentage >= 60
                          ? " (Regular)"
                          : " (Requiere servicio)"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-600">Condición:</span>
                    <span className="font-semibold text-[#1D1D1F]">{selectedCondition?.label}</span>
                  </div>
                  {["15", "16", "17"].includes(selectedSeries) && (
                    <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="font-medium text-gray-600">Ciclos de batería:</span>
                      <span className="font-semibold text-[#1D1D1F]">{batteryCycles}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-600">Opción:</span>
                    <span className="font-semibold text-[#1D1D1F]">
                      {tradeOption === "sell" ? "Vender mi equipo" : "Cambio por equipo nuevo"}
                    </span>
                  </div>
                </div>
              </Card>

              {selectedCondition?.manual ? (
                <div className="mb-8 text-center">
                  <p className="mb-2 text-lg text-gray-600">Precio estimado</p>
                  <p className="text-4xl font-semibold text-[#0071e3]">Cotización sujeta a revisión técnica manual</p>
                  <p className="mt-3 text-sm text-gray-600">
                    Por favor contacta con PuntoCell para una revisión física
                  </p>
                </div>
              ) : (
                <div className="mb-8 text-center">
                  <p className="mb-2 text-lg text-gray-600">Precio estimado de retoma</p>
                  <p className="text-6xl font-semibold text-[#0071e3]">${calculatePrice()}</p>
                  <p className="mt-3 text-sm text-gray-600">*Precio sujeto a revisión física del equipo</p>
                </div>
              )}

              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full rounded-full bg-[#25D366] py-7 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#22c55e] hover:shadow-xl"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.173-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Enviar cotización a PuntoCell
                </Button>
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="w-full rounded-full border-2 border-gray-300 bg-transparent py-7 text-lg font-semibold text-[#1D1D1F] transition-all duration-200 hover:border-[#0071e3] hover:bg-white"
                >
                  Calcular otro equipo
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer with copyright, disclaimer and developer credit */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-sm text-gray-600">© 2026 PuntoCell Valencia. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-gray-500">
            Este sitio no es una página oficial de Apple Inc. Los nombres de productos Apple son marcas registradas.
          </p>
          <p className="mt-3 text-xs text-gray-400">
            Desarrollado por{" "}
            <a
              href="https://thislever.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0071e3] transition-colors hover:text-[#0077ED] hover:underline"
            >
              Lever
            </a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
