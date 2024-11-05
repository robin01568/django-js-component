import csv
from django.http import HttpResponse
from django.db.models import Field

def getcsvfile(request):  
    response = HttpResponse(content_type='text/csv')  
    response['Content-Disposition'] = 'attachment; filename="file.csv"'  
    objs = ModelName.objects.all()  
    writer = csv.writer(response)

    # Get only fields directly defined in the ModelName model
    field_names = [field.name for field in ModelName._meta.get_fields() if isinstance(field, Field)]
    formatted_headers = [field.replace('_', ' ').upper() for field in field_names]
    
    # Write header row
    writer.writerow(formatted_headers)

    # Write data rows
    for obj in objs:
        row = [getattr(obj, field) for field in field_names]
        writer.writerow(row)
    
    return response
