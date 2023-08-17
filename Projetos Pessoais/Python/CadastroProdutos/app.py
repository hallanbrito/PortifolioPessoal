#-Ler dados da planilha
# Inserir cada celula de cada linha em um campo do sistema
import  openpyxl

workbook = openpyxl.load_workbook(`vendas_de_produtos.xlsx`)
vendas_sheet = workbook[`vendas`]

for linha in vendas_sheet.iter_rows(min_row=2):
    linha[0].value