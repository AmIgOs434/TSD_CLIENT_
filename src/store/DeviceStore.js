import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._colors = []
        this._devices = []
        this._love_items = []
        this._baskets=[]
        this._basketDevices=[]
        this._selectedbasketDevices={}
        this._selectedType = {}
        this._selectedColor = {}
        this._page = 1
        this._totalCount = 10
        this._limit = 1
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setColors(colors) {
        this._colors = colors
    }

    setBasketDevices(basketDevices) {
        this._basketDevices = basketDevices
    }
    setBaskets(baskets) {
        this._baskets = baskets
    }
    
    setDevices(devices) {
        this._devices = devices
    }
    setLoves(love_items) {
        this._love_items = love_items
    }

    setSelectedType(type) {
        if( this._selectedType === type){
            this._selectedType = 0
            this.setPage(1)
        }
        else{
            this._selectedType = type
            this.setPage(1)
        }       
    }                                                                                                                                                           
    setSelectedColor(color) {
        if(this._selectedColor === color){
            this._selectedColor = 0
            this.setPage(1)
        }
        else{this._selectedColor = color
            this.setPage(1)
        }
        
       
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    get basketDevices(){
        return this._basketDevices
    }
    get selectedbasketDevices() {
        return this.selectedbasketDevices
    }
    get types() {
        return this._types
    }
    get colors() {
        return this._colors
    }
    get devices() {
        return this._devices
    }

    get love_items() {
        return this._love_items
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedColor() {
        return this._selectedColor
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}