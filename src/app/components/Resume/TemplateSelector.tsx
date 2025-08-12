
'use client';
import { useAppDispatch, useAppSelector } from 'lib/redux/hooks';
import { selectSelectedTemplate, setSelectedTemplate } from 'lib/redux/settingsSlice';

const templates = [
  { id: 'classic', name: 'Clásico' },
  { id: 'modern', name: 'Moderno' },
  { id: 'minimal', name: 'Minimal' },
];

export default function TemplateSelector() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(selectSelectedTemplate);
  return (
    <label className="ml-2 flex items-center gap-2 text-sm">
      <span className="text-gray-600">Plantilla</span>
      <select
        className="rounded border px-2 py-1"
        value={selected}
        onChange={(e) => dispatch(setSelectedTemplate(e.target.value as any))}
      >
        {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
      </select>
    </label>
  );
}
