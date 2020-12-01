function isInputValidation(data) {
    if (!Array.isArray(data)) {
        console.error('ERORR: social ikonoms generuoti reikia arraytipo ');
        return false;
    }
    if (data.length === 0) {
        console.error('ERORR: social ikonoms generuoti reikia ne tuscio arraytipo duomenu saraso');
        return false;
    }
    return true;
}

export { isInputValidation }
